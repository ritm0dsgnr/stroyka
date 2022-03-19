var arrow = document.querySelectorAll('.arrow');

arrow.forEach(element=> (element.onclick = function(e) {
  element.classList.toggle ('active');
}));
