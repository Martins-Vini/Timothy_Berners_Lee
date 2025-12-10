# 🌐 BiografandoNet: Sir Timothy John Berners-Lee

Este projeto é uma página web dedicada a detalhar a vida e as contribuições de **Sir Timothy John Berners-Lee**, o inventor da World Wide Web (WWW), do HTML e do HTTP.

O site foi construído com foco na **precisão histórica e técnica**, utilizando uma estrutura de conteúdo clara e acessível para educar o leitor sobre a importância desse cientista da computação na era moderna.

---

## ✨ Preceitos e Compromisso Editorial

O conteúdo deste site é regido por compromissos editoriais rigorosos, garantindo a qualidade e a veracidade da informação (descritos no `<footer>` do site):

1.  **Compromisso com a Verdade e Precisão:** Priorizamos a pesquisa aprofundada para fornecer um relato fiel da vida e das obras de Berners-Lee.
2.  **Contexto Histórico e Técnico:** Evitamos a simplificação excessiva, mantendo o contexto crucial que levou à criação da WWW.
3.  **Homenagem Detalhada:** O objetivo é honrar a memória dos grandes inventores, garantindo que suas contribuições técnicas sejam explicadas de forma didática.

---

## 🏗️ Estrutura do Conteúdo (Seções do `index.html`)

O conteúdo principal está organizado logicamente em seções (`<aside>`) para guiar o leitor:

| Seção (`id`) | Título Principal | Conteúdo Abordado |
| :--- | :--- | :--- |
| `header` | Sir Timothy John Berners-Lee | Introdução e manchete principal. |
| `info_tim` | Quem é Sir Timothy John Berners-Lee? | Biografia, formação e listagem das três tecnologias fundamentais (HTML, URI/URL, HTTP). |
| `contribuicoes_tim` | Contribuições de Timothy para o mundo | Criação da WWW, conceito de Hipertexto e o impacto social e econômico de liberá-la como *open-source*. |
| `contribuicoes_mundo` | Quais suas Maiores Contribuições para a Programação? | **Tabela** detalhada das funções técnicas do HTML, HTTP e URL/URI. |
| `html_funcionamento` | O que é a Linguagem HTML e como ela Funciona? | Definição de HTML (linguagem de marcação), explicação de tags, elementos e a estrutura de árvore do DOM. |
| `www_funcionamento` | O que é a World Wide Web? | Diferenciação entre Internet (infraestrutura) e Web (serviço), e o ciclo de comunicação (Navegador, Servidor, Protocolos). |
| `outras_contribuicoes` | Quais são suas outras contribuições relevantes? | Princípio da Neutralidade de Dados, W3C, Web Semântica e Projeto Solid. |
| `midias_timothy` | Mídias com Timothy | Coleção de vídeos incorporados (TED Talks, Entrevistas) para aprofundamento. |
| `curiosidades` | Curiosidades sobre sua pessoa | Fatos históricos, como o primeiro site e o nome original do navegador. |
| `footer` | Direitos Autorais reservados | Compromisso editorial e links para as redes sociais do escritor. |

---

## 💡 Funcionalidade Implementada: Lightbox de Imagens

O site conta com uma funcionalidade de *Lightbox* (modal de imagem) implementada em JavaScript puro, melhorando a visualização de gráficos e fotos no corpo do texto.

### Como Funciona a Implementação

| Arquivo | Elemento / Código | Função |
| :--- | :--- | :--- |
| **HTML** (`index.html`) | `<div id="lightbox">` | Estrutura oculta do modal, posicionada no final do `<body>`. |
| **HTML** (`index.html`) | `<img class="lightbox-ativador" data-lightbox="...">` | Classe e atributo adicionados às imagens que devem ser clicáveis. |
| **CSS** (`style.css`) | `#lightbox`, `.lightbox-oculto` | Define a sobreposição em tela cheia (`position: fixed`, `z-index: 9999`) e o fundo escuro (`rgba(0,0,0,0.9)`). |
| **JavaScript** (`main.js`) | `imgAtiva.forEach(...)` | Itera sobre todas as imagens com a classe `.lightbox-ativador` e anexa o evento `click`. |
| **JavaScript** (`main.js`) | `abrirLightbox(imagem)` | Pega o `data-lightbox` da imagem clicada e o atribui ao `.src` da imagem dentro do modal (`lightboxImagem.src`). |
| **JavaScript** (`main.js`) | `fecharLightbox()` | Adiciona novamente a classe `.lightbox-oculto` ao `lightbox`. |

### Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**

---

## 🚀 Como Executar o Projeto

1.  **Clone (ou Baixe) o repositório.**
2.  Garanta que a estrutura de pastas (`styles/`, `images/`, `scripts/`) esteja correta.
3.  Abra o arquivo `index.html` diretamente no seu navegador.
