// ==========================================
// 1. LÓGICA DO MENU HAMBURGER (CELULAR)
// ==========================================
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

// Função para Abrir/Fechar ao clicar no ícone de três riscos
if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
    });
}

// Função EXCLUSIVA para forçar o fechamento (Chamada pelo X no HTML)
function fecharMenu() {
    if (hamburger && menu) {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
    }
}

// Fecha o menu ao clicar nos links de navegação
document.querySelectorAll(".menu li").forEach(item => {
    item.addEventListener("click", () => {
        if (!item.classList.contains("close-btn")) {
            fecharMenu();
        }
    });
});

// ==========================================
// 2. LÓGICA DA TROCA AUTOMÁTICA DE FOTOS
// ==========================================
const fotosSemanais = [
    { 
        // Lembre-se de criar a pasta "semanais" e colocar as fotos com esses nomes
        fundo: 'imagens/semanais/bg-1.jpeg', 
        destaque: 'imagens/semanais/destaque-1.jpeg' 
    },
    { 
        fundo: 'imagens/semanais/bg-2.jpeg', 
        destaque: 'imagens/semanais/destaque-2.jpeg' 
    },
    { 
        fundo: 'imagens/semanais/bg-3.jpeg', 
        destaque: 'imagens/semanais/destaque-3.jpeg' 
    },
    { 
        fundo: 'imagens/semanais/bg-4.png', 
        destaque: 'imagens/semanais/destaque-4.png' 
    }
];

function atualizarFotosDaSemana() {
    const dataAtual = new Date();
    const semanasPassadas = Math.floor(dataAtual.getTime() / (1000 * 60 * 60 * 24 * 7));
    
    const indexDaVez = semanasPassadas % fotosSemanais.length;
    const fotosEscolhidas = fotosSemanais[indexDaVez];

    // Atualiza o Destaque
    const destaqueHero = document.querySelector('.destaque-img-box img');
    if (destaqueHero) {
        destaqueHero.src = fotosEscolhidas.destaque;
    }

    // Atualiza o Fundo com o Degradê + a Foto Automática
    const fundoHero = document.querySelector('.hero'); 
    if (fundoHero) {
        fundoHero.style.backgroundImage = `
            linear-gradient(90deg,
                rgba(0, 0, 0, 0.95) 0%,
                rgba(0, 0, 0, 0.80) 40%,
                rgba(197, 84, 28, 0.7) 100%),
            url('${fotosEscolhidas.fundo}')
        `;
    }
}

// Executa a troca de fotos assim que o site terminar de carregar
document.addEventListener("DOMContentLoaded", () => {
    atualizarFotosDaSemana();
});