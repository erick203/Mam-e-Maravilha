function criarCoracao(event) {
    const estrela = document.createElement("div");
    // Usando estrela em vez de coração
    estrela.innerHTML = "⭐"; 
    estrela.className = "estrela-clique";
    estrela.style.left = event.clientX + "px";
    estrela.style.top = event.clientY + "px";
    document.body.appendChild(estrela);
    
    setTimeout(() => { estrela.remove(); }, 1000);
    
    const audio = document.getElementById('musica');
    if (audio.paused) {
        audio.play();
    }
}

// O restante do código de animação dos cards permanece igual
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