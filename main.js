document.addEventListener('DOMContentLoaded', () => { // Adiciona um evento direto no document
    
    const toggleButtons = document.querySelectorAll('.toggle-btn'); // salva class que está dentro do button numa constante 

    toggleButtons.forEach(button => { // mapeia os buttons

        button.addEventListener('click', () => { // adiciona um evento de click nos buttons

            const faqItem = button.closest('.faq-item');  // guarada a div pai
            const img = button.querySelector('img'); // salva elemto img numa const
            const answer = faqItem.querySelector('.answer'); // salva o próximo elemento button irmão

            const isVisible = !answer.classList.contains('hidden'); // salva class hidden numa const

            if (isVisible) { // verifica se a class hidden é true
                answer.classList.add('hidden');
                img.src = 'assets/icon-plus.svg';
                img.alt = 'Expand';
            } else { // verifica se class hidden é false
                answer.classList.remove('hidden');
                img.src = 'assets/icon-minus.svg';
                img.alt = 'Collapse';
            }
        });
    });
});
