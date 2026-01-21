const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

// Função para Abrir/Fechar ao clicar no ícone de três riscos
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
});

// Função EXCLUSIVA para forçar o fechamento (Chamada pelo X no HTML)
function fecharMenu() {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}

// Fecha o menu ao clicar nos links de navegação (About, Roles, etc)
document.querySelectorAll(".menu li").forEach(item => {
    item.addEventListener("click", () => {
        // Se não for o botão de fechar, fecha o menu normal
        if (!item.classList.contains("close-btn")) {
            fecharMenu();
        }
    });
});