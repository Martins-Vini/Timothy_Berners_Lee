
//Essa função envolve conceitos de HTML dinâmico, você deve aprender:
//- Conceitos de DOM, - Seleção de componentes, - Criação de componentes dinâmicos, - Seleção de atributos do componente
// - Adição e remoção de classe em certos momentos, adição de eventos e loops forEach

// 1° Passo -> selecionar todos os componentes para realizar a lógica

const lightbox = document.querySelector("div#lightbox")
const lightboxLegenda = document.querySelector("div#lightbox-legenda")
const lightboxImagem = document.querySelector("img#lightbox-img")
const lightboxFechar = document.getElementsByClassName("lightbox-fechar")[0]
const imgAtiva = document.querySelectorAll(".lightbox-ativador")

// 2° Passo -> Função de abrir imagem
function abrirLightbox(imagem) {
    // Vai pegar quais a imagens irão ter lightbox através do atributo delas
    lightboxImagem = imagem.getAttribute("data-lightbox");

    // Define a legenda do lightbox usando o texto do atributo alt da imagem
    lightboxLegenda.innerHTML = imagem.alt;

    // Remove a classe de ocultar e adiciona a classe de animação, não vai estar mais escondido
    lightbox.classList.remove("lightbox-oculto")
    lightbox.classList.add("fade-in")
}

// 3° passo -> Função para fechar o lightbox com "x"
function fecharLightbox() {
    // Adiciona a classe de ocultar
    lightbox.classList.add("lightbox-oculto");
    lightbox.classList.remove("fade-in")

}

// 4° passo -> Adiciona event listeners para abrir o lightbox e fechar
imgAtiva.forEach(imagem => imagem.addEventListener('click', function(){
    abrirLightbox(this)
}));

lightboxFechar.addEventListener('click', fecharLightbox);

// Fecha clicando fora da imagem (no fundo escuro)
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        fecharLightbox();
    }
});
