// Abrir o Overlay
document.getElementById("main").onclick = function () {
    document.getElementById("myNav").style.height = "100%"; // Expandir o overlay
}

// Fechar o Overlay
function closeNav() {
    document.getElementById("myNav").style.height = "0%"; // Esconder o overlay
}


// Seleciona todas as divs com a classe 'clickable'
const divs = document.querySelectorAll('.clickable');

// Adiciona um evento de clique a cada div
divs.forEach(div => {
    div.addEventListener('click', () => {
        // Redireciona para o URL armazenado no atributo 'data-url'
        const url = div.getAttribute('data-url');
        window.location.href = url;
    });
});

// Seleciona todas as divs com a classe 'clickable'
const divss = document.querySelectorAll('.clicavel');

// Adiciona um evento de clique a cada div
divs.forEach(div => {
    div.addEventListener('click', () => {
        // Redireciona para o URL armazenado no atributo 'data-url'
        const url = div.getAttribute('data-url');
        window.location.href = url;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Recupera as preferências salvas no localStorage e converte para minúsculas
    const preferenciasSalvas = JSON.parse(localStorage.getItem('preferencias')) || [];
    const preferenciasMinusculas = preferenciasSalvas.map(preferencia => preferencia.toLowerCase());

    // Seleciona todas as divs que representam os jogos
    const jogos = document.querySelectorAll('.filterDiv');
    let jogosExibidos = 0; // Contador para controlar o número de jogos exibidos

    jogos.forEach(function (jogo) {
        // Se já foram exibidos 4 jogos, não exibe mais
        if (jogosExibidos >= 4) {
            jogo.style.display = 'none'; // Esconde o jogo se já houver 4 jogos exibidos
            return;
        }

        // Obtém as classes da div, exceto a classe 'filterDiv', e converte para minúsculas
        const generos = Array.from(jogo.classList)
            .filter(classe => classe !== 'filterDiv')
            .map(genero => genero.toLowerCase());

        // Verifica se pelo menos um dos gêneros do jogo está nas preferências salvas (ignorando maiúsculas/minúsculas)
        const jogoSelecionado = preferenciasMinusculas.some(genero => generos.includes(genero));

        // Exibe ou oculta o jogo com base no filtro
        if (jogoSelecionado) {
            jogo.style.display = 'block'; // Exibe o jogo
            jogosExibidos++; // Incrementa o contador de jogos exibidos
        } else {
            jogo.style.display = 'none'; // Oculta o jogo
        }
    });
});


// Evento de rolagem
window.addEventListener('scroll', handleScroll);

// Chama a função ao carregar a página para garantir que a div apareça se já estiver visível
window.addEventListener('load', handleScroll);

// Função para rolar até o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rolagem suave
    });
}
