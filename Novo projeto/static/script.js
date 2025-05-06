const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    if (menuMobile.classList.contains("bi-list")) {
        menuMobile.classList.replace("bi-list", "bi-x");
    } else {
        menuMobile.classList.replace("bi-x", "bi-list");
    }
    body.classList.toggle("mobile-nav-active");
});

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("mobile-nav-active")) {
            body.classList.remove("mobile-nav-active");
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    });
});

const items = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    items.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });
};

animeScroll();
window.addEventListener("scroll", animeScroll);

const btnEnviar = document.querySelector('#btn-enviar');
const btnEnviarLoader = document.querySelector('#btn-enviar-loader');

if (btnEnviar && btnEnviarLoader) {
    btnEnviar.addEventListener("click", () => {
        btnEnviar.style.display = "none";
        btnEnviarLoader.style.display = "block";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const alerta = document.getElementById("alerta");

    if (alerta) {
        setTimeout(() => {
            alerta.classList.remove("show");
            alerta.classList.add("fade");
            setTimeout(() => alerta.remove(), 500);
        }, 5000);
    }
});
