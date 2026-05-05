const titulo = document.querySelector("h1");

console.log("Título representa", titulo)

titulo.textContent = "Novo Titulo"

//const container = document.getelementbyid ("container")

const container = document.querySelector("#container")
console.log(container)

container.innerHTML = "<p>Novo parágrafo</p>"

const imagem = document.querySelector("img")
console.log(imagem)

imagem.setAttribute("src", "/kratos-digital-fanart-o4098nk2praiaw0d.png")
imagem.alt = "siriri"

const caixa = document.querySelector("box")
console.log(caixa)

caixa.style.backgroundColor = "lightgreen"

caixa.classList.add("oculto")
caixa.classList.remove("oculto")

const botao = document.getElementById("botao")
console.log(botao)

botao.addEventListener("click", () => {
    caixa.classList.toggle("oculto")
})

const novoItem = document.createElement("li")

novoItem.textContext = "Novo Item"

document.querySelector("ul").appendChild(novoItem)
novoItem.remove()