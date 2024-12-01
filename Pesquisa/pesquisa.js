// Abrir o Overlay
document.getElementById("main").onclick = function() {
  document.getElementById("myNav").style.height = "100%"; // Expandir o overlay
}

// Fechar o Overlay
function closeNav() {
  document.getElementById("myNav").style.height = "0%"; // Esconder o overlay
}


  filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  var btnContainer = document.getElementById("Categorias");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// Função de filtragem dos jogos
function filterSelection(c) {
  var x, i;
  var emptyDiv = document.querySelector(".empty"); // Selecione a div empty
  
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  
  let visibleGamesCount = 0; // Contador de jogos visíveis

  // Percorra todos os jogos e conte os que devem ser exibidos
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    
    if (x[i].className.indexOf(c) > -1) {
      w3AddClass(x[i], "show");
      visibleGamesCount++; // Incrementa o contador
    }
  }
  
  // Exibe ou esconde a div empty baseado no número de jogos visíveis
  if (visibleGamesCount % 2 === 1) {  // Se o número de jogos for ímpar
    if (emptyDiv) emptyDiv.style.display = "block"; // Exibe a div empty
  } else {
    if (emptyDiv) emptyDiv.style.display = "none"; // Esconde a div empty
  }
}

// Função para adicionar classes
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
}

// Função para remover classes
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
}

// Inicialização para exibir todos os jogos
filterSelection("all");

// Controle de filtros com botões
var btnContainer = document.getElementById("Categorias");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


  //div final
// Função para verificar se o elemento está visível na tela
function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0; // Mudança na condição
}

// Alvo da div
const targetDiv = document.getElementById('targetDiv');

// Função para verificar a visibilidade e aplicar ou remover a classe
function handleScroll() {
  if (isElementInView(targetDiv)) {
      targetDiv.classList.add('visible'); // Adiciona a classe para mostrar a div com animação
  } else {
      targetDiv.classList.remove('visible'); // Remove a classe para esconder a div quando não estiver visível
  }
}

// Evento de rolagem
window.addEventListener('scroll', handleScroll);

// Chama a função ao carregar a página para garantir que a div apareça se já estiver visível
window.addEventListener('load', handleScroll);

// Função para rolar até o topo (precisa ser implementada)
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
