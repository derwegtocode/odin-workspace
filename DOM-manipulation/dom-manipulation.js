const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "this is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.style.cssText = "color: red";
para.textContent = "Hey, I'm red!"

container.appendChild(para);

const blueh3 = document.createElement("h3");
blueh3.style.cssText = "color: blue";
blueh3.textContent = "I'm a blue h3!";

container.appendChild(blueh3);

const blackdiv = document.createElement("div")
blackdiv.setAttribute("id", "black-div");
blackdiv.setAttribute("class", "black-div");
blackdiv.setAttribute("style", "background-color: pink; border-color:black");

const divh1 = document.createElement("h1")
divh1.textContent = "I'm in a div";
const divp = document.createElement("p");
divp.textContent = "ME TOO!";

blackdiv.appendChild(divh1);
blackdiv.appendChild(divp);

container.appendChild(blackdiv);



const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

  btn.addEventListener('click', function (e) {
    console.log(e);
  });

  btn.addEventListener('click', function (e) {
    console.log(e.target);
  });
  
  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });