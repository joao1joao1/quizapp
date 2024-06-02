let tema = "claro"
// variavel c valor claro

const botaoTema = document.querySelector(".tema button") /* selecionou uma class */

botaoTema.addEventListener("click", trocarTema) /* ordernou um evento (OQUE, EFEITO) */

const body = document.querySelector("body")
    // body selecionado p ser manuseado a partir de entao

function trocarTema() {
    if (localStorage.getItem("tema")) {
        /* que o armazenamento do js pegue o tema */
        tema = localStorage.getItem("tema")
        // para q o tema seja o tema
    }

    if (tema === "claro") {
        // if (tema === "claro")
        body.classList.add("escuro")
        // add ao body a class de c valor escuro
        localStorage.setItem("tema", "escuro")
        // salve na variavel tema, do armazenamento, o valor escuro
        botaoTema
    } else {
        body.classList.remove("escuro")
        // e se tiver escuro, remova a class escuro do body
        localStorage.setItem("tema", "claro")
        // e salve na variavel tema, do armazenamento, o valor claro
    } 
}

function verificarTema () {
    if (localStorage.getItem("tema")) {
        tema = localStorage.getItem("tema")
    }

    if (tema === "escuro") {
        body.classList.add("escuro")
    }
}

verificarTema()