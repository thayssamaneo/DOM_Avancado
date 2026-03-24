// criar eventos avançados com DOM

// evento para capturar a tecla digitada
// evento do documento como um todo (não é um elemento específico)
document.addEventListener("keydown", (event)=>{
    console.log("Tecla pressionada: "+ event.key);
})

// função de sugestão de texto
let input = document.createElement("input");
input.type = "text";
input.id = "buscar";
input.placeholder = "Digite para buscar...";

document.body.appendChild(input);
// lista de sugestões
let lista = document.createElement("ul");
lista.id = "sugestoes";
lista.style.listStyle = "none";
document.body.appendChild(lista);

// criar o vetor de sugestões
let sugestoes = [
  "JavaScript", "Java", "Python", "C#", "PHP", "Dart", "Flutter", "Kotlin", "Ruby", "Go", "Rusty"
];

// evento para capturar texto e sugerir do vetor
document.getElementById("buscar").addEventListener("keypress", ()=>{
    let texto = input.value.toLowerCase();
    lista.innerHTML = "";
    sugestoes.forEach(sugestao =>{
        if (sugestao.toLowerCase().includes(texto)){
            let item = document.createElement("li");
            // Adicionar item a lista de sugestoes
            // porem se item for clicado - Auto completar
            item.style.cursor = "pointer";
            item.addEventListener("click", ()=>{
                input.value = sugestao;
                lista.innerHTML = "";
            });
            item.innerText = sugestao;
            lista.appendChild(item);
        }
    })
})