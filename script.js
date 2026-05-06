// Função para tocar a música e criar o efeito visual
function criarCoracao(event) {
    const audio = document.getElementById('musica');
    
    // Tenta dar o play assim que houver o primeiro clique[cite: 2]
    if (audio && audio.paused) {
        audio.play().catch(e => console.log("Aguardando interação para tocar áudio"));
    }

    // Código das estrelas que você já possui[cite: 2]
    const estrela = document.createElement("div");
    estrela.innerHTML = "⭐"; 
    estrela.className = "estrela-clique";
    estrela.style.left = event.clientX + "px";
    estrela.style.top = event.clientY + "px";
    document.body.appendChild(estrela);
    
    setTimeout(() => { estrela.remove(); }, 1000);
}

// O restante do seu código de animação dos cards[cite: 2]
const cards = document.querySelectorAll('.card-aluno');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.8s ease-out";
    observer.observe(card);
});
