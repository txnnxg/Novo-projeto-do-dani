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
        fundoMobile: 'imagens/semanais/bg-1-mobile.jpeg',
        destaque: 'imagens/semanais/destaque-1.jpeg' 
    },
    { 
        fundo: 'imagens/semanais/bg-2.jpeg', 
        fundoMobile: 'imagens/semanais/bg-2-mobile.png',
        destaque: 'imagens/semanais/destaque-2.jpeg' 
    },
    { 
        fundo: 'imagens/semanais/bg-3.jpeg', 
        fundoMobile: 'imagens/semanais/bg-3-mobile.jpeg',
        destaque: 'imagens/semanais/destaque-3.jpeg' 
    },
    { 
        fundo: 'imagens/semanais/bg-4.png', 
        fundoMobile: 'imagens/semanais/bg-4-mobile.jpeg',
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

    // ==========================================
    // A MÁGICA DO CELULAR ACONTECE AQUI
    // ==========================================
    const larguraTela = window.innerWidth;
    let imagemFundoDaVez = fotosEscolhidas.fundo; // Por padrão, usa a de PC

    if (larguraTela <= 768) {
        imagemFundoDaVez = fotosEscolhidas.fundoMobile; // Se a tela for de celular, troca a foto!
    }

    // Atualiza o Fundo com o Degradê + a Foto Certa
    const fundoHero = document.querySelector('.hero'); 
    if (fundoHero) {
        fundoHero.style.backgroundImage = `
            linear-gradient(to bottom,
                rgba(0, 0, 0, 0.2) 0%,   
                rgba(0, 0, 0, 0.8) 100%), 
            url('${imagemFundoDaVez}')
        `;
    }
}

// Executa a troca de fotos assim que o site terminar de carregar
document.addEventListener("DOMContentLoaded", () => {
    atualizarFotosDaSemana();
});

// Executa a troca se a pessoa redimensionar a tela do navegador
window.addEventListener("resize", () => {
    atualizarFotosDaSemana();
});