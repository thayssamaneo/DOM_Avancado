// evento de verificação de formulário

// criar o formulário com DOM
let form = document.createElement("form");
form.id = "formCadastro";
document.body.appendChild(form); // add o form ao body

// input para nome
let inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Digite seu nome";
inputNome.id = "nome";
form.appendChild(inputNome);

//inputEmail
let inputEmail = document.createElement("input");
inputEmail.type = "text";
inputEmail.placeholder = "Digite seu email";
inputEmail.id = "email";
form.appendChild(inputEmail);

// Botão de enviar
let btnEnviar = document.createElement("button");
btnEnviar.innerText = "Enviar";
btnEnviar.type = "submit";
form.appendChild(btnEnviar);

// adicioanar um parágrafo para enviar uma mensagem de validação
let p = document.createElement("p");
p.id = "mensagem";
document.body.appendChild(p);

// evento de validação do formulário
document.getElementById("formCadastro").addEventListener("submit", (event)=>{
    // evitar o recarregamento da página
    event.preventDefault();
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let mensagem = document.getElementById("mensagem");

    // condição
    if (nome.value === "" || email.value === ""){
        mensagem.innerText = "Preencha todos os campos!";
        mensagem.style.color = "red";
    } else{
        mensagem.innerText = "Cadastro realizado com sucesso!!!";
        mensagem.style.color = "green";
        // limpa os campos
        nome.value = "";
        email.value = "";
    }
})