// Altere a cor de fundo do header.
document.querySelector("header").style.color = "#F5FBEF";
document.querySelector("header").style.backgroundColor = "#758E4F";

/**
Altere a cor de fundo da div das tarefas que são Urgentes e Importantes e Urgentes ou Não Importantes;
Altere a cor de fundo do título das das tarefas que são Urgentes e Importantes ou Urgentes e Não Importantes;
Altere a cor de fundo da div das tarefas que não são Urgentes e Importantes ou Urgentes e Não Importantes;
Altere a cor de fundo do título das das tarefas que não são Urgentes e Importantes ou Urgentes e Não Importantes;
Altere a cor de fundo da div do footer.
**/
for(let index = 0; index < document.querySelectorAll("div").length; index += 1) {

    const div = document.querySelectorAll("div")[index];
    const h3 = document.querySelectorAll("h3")[index];

    div.style.color = "#F5FBEF"
    
    if(div.innerText === "Urgente e Não Importante" || div.innerText === "Urgente e Importante") {
        div.style.backgroundColor = "#B56B45"
        h3.style.backgroundColor = "#080F0F"

    } else if (div.innerText === "Não Urgente e Importante" || div.innerText === "Não Urgente e Não Importante") {
        div.style.backgroundColor = "#33658A"
        h3.style.backgroundColor = "#080F0F"

    } else {
        div.style.backgroundColor = "#080F0F"
    }
}




