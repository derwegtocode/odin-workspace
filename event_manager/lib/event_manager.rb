require 'csv'
require 'google/apis/civicinfo_v2'
require 'erb'
require 'time'

def clean_zipcode(zipcode)
  zipcode.to_s.rjust(5,"0")[0..4]
end

def legislators_by_zipcode(zip)
  civic_info = Google::Apis::CivicinfoV2::CivicInfoService.new
  civic_info.key = 'AIzaSyClRzDqDh5MsXwnCWi0kOiiBivP6JsSyBw'

  begin
    civic_info.representative_info_by_address(
      address: zip,
      levels: 'country',
      roles: ['legislatorUpperBody', 'legislatorLowerBody']
    ).officials
  rescue
    'You can find your representatives by visiting www.commoncause.org/take-action/find-elected-officials'
  end
end

def save_thank_you_letter(id,form_letter)
  Dir.mkdir('output') unless Dir.exist?('output')

  filename = "output/thanks_#{id}.html"

  File.open(filename, 'w') do |file|
    file.puts form_letter
  end
end

def select_phone(phone)
  phone.gsub!(/[^0-9]/, '')
  if phone.length < 10 || phone.length > 11 && phone[0] != '1'
    phone = 'Bad number'
  elsif phone.length > 11 && phone[0] == '1'
    phone.slice!(0)
  else 
    phone
  end
end

times =[]
days = []
week_days = {
  0 => "Sunday",
  1 => "Monday", 
  2 => "Tuesday",
  3 => "Wednesday",
  4 => "Thursday",
  5 => "Friday",
  6 => "Saturday"
}

def most_common_value(array)
  freq = array.inject(Hash.new(0)) { |i,v| i[v] += 1; i }
  array.max_by { |v| freq[v] }
end

puts 'EventManager initialized.'

contents = CSV.open(
  'event_attendees.csv',
  headers: true,
  header_converters: :symbol
)

template_letter = File.read('form_letter.erb')
erb_template = ERB.new template_letter

contents.each do |row|
  id = row[0]
  name = row[:first_name]
  phone = select_phone(row[:homephone])
  days.push(Time.strptime(row[:regdate], '%m/%d/%Y %H:%M').wday)
  times.push(Time.strptime(row[:regdate], '%m/%d/%Y %H:%M').hour)
  zipcode = clean_zipcode(row[:zipcode])
  legislators = legislators_by_zipcode(zipcode)

  form_letter = erb_template.result(binding)

  save_thank_you_letter(id,form_letter)
  puts "#{name} #{phone} #{zipcode}"
end


puts "The most frequent day is #{week_days[most_common_value(days)]} and the most frequent time is #{most_common_value(times)}"
