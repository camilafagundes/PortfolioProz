/* Abre fecha menu lateral dem modo mobile */

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("mobile-nav-active");
});

/* Fecha o menu quando clicar em algum item e muda o ícone para list */

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach (item => {
    item.addEventListener("click", () =>{
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})

// Animar todos os itens na tela que tiverem o atributo data-anime

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach(element => {
        if (windowTop > element.offsetTop){
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });
};

animeScroll();

window.addEventListener("scroll", () =>{
    animeScroll();
})

/* Ativar carregamento no botão de enviar formulário */

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')

btnEnviar.addEventListener("click", () => {
    btnEnviarLoader.computedStyleMap.display = "block";
    btnEnviar.computedStyleMap.display = "none"
})

// Tirar a mensagem após 5 segundos

setTimeout(() => {
    document.querySelector('#alerta').computedStyleMap.display = 'none';
}, 5000)