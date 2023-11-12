// Acessando o elemento where-are-you
document.querySelector("#where-are-you");

// Acessando parent a partir de where-are-you e adicionando uma color a ele
let parentElement = document.querySelector("#where-are-you").parentNode
parentElement.style.color = "blue";

console.log(parent);

// Acessando o first-child-of-child e adicionando um texto a ele
document.querySelector("#first-child-of-child").textContent = "Texto adicionado por JavaScript.";

// Acessando o first-child a partir de parent
document.querySelector("#parent").firstElementChild;

// Acessando o first-child a partir de where-are-you
document.querySelector("#where-are-you").previousElementSibling;

// Acessando o texto Attention! a partir de where-are-you
document.querySelector("#where-are-you").nextSibling;

// Acessando o third-child a partir de where-are-you
document.querySelector("#where-are-you").nextElementSibling;

// Acessando o third-child a partir de parent
document.querySelector("#parent").lastElementChild.previousElementSibling;
