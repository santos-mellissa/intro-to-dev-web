const elementsLi = document.querySelectorAll("li");
const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const inputElement = document.getElementById('input');
const myWebpage = document.getElementById('letterboxd');

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.

function addClassTech (event) {
    document.querySelector(".tech").classList.remove("tech");
    event.target.classList.add("tech");
}

for(index = 0; index < elementsLi.length; index += 1) {
    elementsLi[index].addEventListener('click', addClassTech);
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.
function movieName(event) {
    document.querySelector(".tech").innerText = event.target.value;
}

inputElement.addEventListener('input', movieName);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3', redirecione para alguma página.
letterboxd.addEventListener('dblclick', () => {
    window.location.replace("https://letterboxd.com/mellalmeida/")
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3', altere a cor do mesmo.
function top3Color(event, color) {
    event.target.style.color = color;
}

myWebpage.addEventListener('mouseover', () => top3Color(event, "#2fc18c"));
myWebpage.addEventListener('mouseout', () => top3Color(event, "white"));