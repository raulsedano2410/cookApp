export const checkClass = (parentEl) => {
  const padre = document.getElementById('padre');
  const hijos = padre.children;

  for (let i = 0; i < hijos.length; i++) {
    if (hijos[i].classList.contains('active')) {
      padre.classList.add('clase-estilo-padre');
      break; // Si al menos un hijo tiene la clase específica, detener el bucle
    }
  }
};
