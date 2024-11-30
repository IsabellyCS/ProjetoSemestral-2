// Abrir o Overlay
document.getElementById("main").onclick = function() {
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