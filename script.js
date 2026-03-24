// Adicionar elementos com DOM

// Exemplo de criação de OBJ com DOM
let header = document.createElement("header");
// estilização do elemento
header.style.backgroundColor = "black";
header.style.height = "8vh";
// Adicionar elementos ao body
document.body.appendChild(header); // adicionando o header como elemento filho do body
// Estilização do body
document.body.style.margin = "0"; // retira a margin padrão do body
// Adcionar elementos ao header
let divNav = document.createElement("div");
divNav.style.display = "flex";
divNav.style.justifyContent = "space-around";
divNav.style.height = "100%";
divNav.style.color = "aliceblue";
divNav.style.alignItems = "center";
divNav.style.fontSize = "5vh";
divNav.style.fontFamily = "Comic Sans MS";

header.appendChild(divNav); // adicionando divNav como elemento filho de header

let itensNav = ["Home", "Produtos", "Contato"];
// Adicionar itens na nav
itensNav.forEach(e=>{
    let item = document.createElement("a");
    item.innerText = e;
    item.href = e.toLowerCase()+".html";
    item.style.textDecoration = "none";
    item.style.color = "aliceblue";
    divNav.appendChild(item);
});

// Footer

let footer = document.createElement("footer");
footer.style.backgroundColor = "black";
footer.style.height = "8vh";
footer.style.width = "100%";
footer.style.color = "aliceblue";
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.position="fixed";
footer.style.bottom ="0";
document.body.appendChild(footer);

let divFooter = document.createElement("div");
divFooter.style.fontSize = "3vh";
divFooter.style.fontFamily = "Comic Sans MS";
divFooter.innerText = "Copyright © 2024 - Todos os direitos reservados.";
footer.appendChild(divFooter);

// CLonar elementos com DOM

let card = document.createElement("div");
card.classList.add("card"); // adiciona a class card no elemento
card.style.width = "120px";
card.style.height = "200px";
card.style.backgroundColor = "lightblue";
card.style.margin = "1px";

// criar um container para adicionar os cards
let container = document.createElement("div");
container.classList.add("container");
container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.margin = "0 auto";
container.style.width = "90%";
container.style.flexWrap = "wrap"; // quebra a linha dos elementos filhos

// criar um botão para clonar as div.card
let btnClonar = document.createElement("button");
btnClonar.innerText = "Clonar";
btnClonar.id = "btnClonar"; // adicionar id para o botão
document.body.appendChild(btnClonar);
document.body.appendChild(container);
container.appendChild(card);

// criar método para adicionar evento ao btn
btnClonar.addEventListener("click", ()=>{
    let clonar = card.cloneNode(true); // clonar o card
    container.appendChild(clonar);
})

// Criar uma chave de modo claro e escuro
let chave = document.createElement("input");
chave.type = "checkbox";
chave.id = "darkmode";
chave.style.position = "fixed";
chave.style.top = "10px";
chave.style.right = "10px"; // chave topo a direita

document.body.appendChild(chave); // add chave ao body

// criando evento para chave
chave.addEventListener("change", ()=>{
    document.body.classList.toggle("darkMode");
})