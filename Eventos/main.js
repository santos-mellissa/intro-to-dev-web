const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const inputElement = document.getElementById('input');
const myWebpage = document.getElementById('my-spomellfy');


// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.
function classTech(event) {
    document.querySelector(".tech").classList.remove("tech");
    event.target.classList.add("tech");
}

firstLi.addEventListener('click', classTech);
secondLi.addEventListener('click', classTech);
thirdLi.addEventListener('click', classTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.
function inputText(event) {
    document.querySelector(".tech").innerText = event.target.value;
}
inputElement.addEventListener('input', inputText);


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spomellfy',
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.
myWebpage.addEventListener('dblclick', () => {
    window.location.replace("https://www.w3schools.com/cssref/css_selectors.php")
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spomellfy', altere
// a cor do mesmo.
function top3Background(event, color) {
    event.target.style.color = color;
}

myWebpage.addEventListener('mouseover', () => top3Background(event, "blue"));
myWebpage.addEventListener('mouseout', () => top3Background(event, "white"));