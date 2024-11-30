document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com a classe 'genero'
    const elementos = document.querySelectorAll('.genero');
    
    // Para cada elemento com a classe 'genero', adiciona o evento de clique
    elementos.forEach(function(elemento) {
        elemento.addEventListener('click', function() {
            console.log('Elemento clicado!'); // Verifica se o clique foi registrado

            // Verifica se o elemento já tem a classe 'selecionado'
            if (elemento.classList.contains('selecionado')) {
                // Se tem, remove a classe 'selecionado' e adiciona a classe 'genero'
                elemento.classList.remove('selecionado');
                elemento.classList.add('genero');
            } else {
                // Se não tem, remove a classe 'genero' e adiciona a classe 'selecionado'
                elemento.classList.remove('genero');
                elemento.classList.add('selecionado');
            }
        });
    });
});
