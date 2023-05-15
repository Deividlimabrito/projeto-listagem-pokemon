let botaoAlterarTema = document.querySelector("#botao-alterar-tema")

let body = document.querySelector("body")

let imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    let modoEscuroEstaAtivo = body.classList.contains("modo-escuro")


    if (modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro")
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")

    } else {
        body.classList.add("modo-escuro")

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")

    }

})