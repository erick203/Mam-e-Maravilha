# 🦸‍♀️ Mamãe Maravilha ❤️

Um projeto web interativo e emocionante desenvolvido para celebrar o **Dia das Mães**. O site combina uma estética inspirada na Mulher Maravilha com uma galeria de fotos personalizada, música ambiente e efeitos visuais dinâmicos.

## 📝 Sobre o Projeto

O projeto "Mamãe Maravilha" é uma homenagem digital criada por **Tia Camila e Tia Valéria**. Ele funciona como um mural interativo onde cada card representa um aluno com uma mensagem especial para sua mãe. 

O site utiliza técnicas modernas de design, como **Glassmorphism** no card de música e efeitos de **Parallax** no topo da página.

## ✨ Funcionalidades Principais

* **Galeria Interativa**: 12 cards de alunos com legendas carinhosas e efeitos de zoom ao passar o mouse.
* **Sistema de Estrelas**: Ao clicar na tela, estrelas animadas surgem na posição do cursor e voam para cima.
* **Trilha Sonora**: Execução da música "Dona Cila" que inicia após a primeira interação do usuário.
* **Animação de Entrada**: Os cards da galeria surgem suavemente conforme o usuário faz o scroll pela página.
* **Botão de Visualização**: Cada foto possui um ícone de lupa para abrir a imagem original em tamanho real.

## 🚀 Tecnologias Utilizadas

* **HTML5**: Estrutura semântica e suporte a áudio.
* **CSS3**: Estilização avançada, variáveis personalizadas, Grid Layout e animações `@keyframes`.
* **JavaScript (Vanilla)**: Lógica para animação de cliques, controle de áudio e efeitos de scroll via `IntersectionObserver`.
* **Google Fonts**: Utilização das fontes *Dancing Script* e *Poppins*.

## 📂 Estrutura de Pastas

Para o funcionamento correto, o projeto deve seguir esta organização de arquivos:

```text
/
├── index.html          # Estrutura principal
├── style.css           # Estilização e responsividade
├── script.js           # Lógica e animações
├── img/                # Pasta com as 12 fotos (foto 01.jpeg até foto 12.jpeg)
│   └── painel-maravilha.jpg # Imagem de fundo do cabeçalho
└── music/              # Pasta com o arquivo de áudio MP3
