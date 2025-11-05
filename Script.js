// script.js - interacción básica para el sitio
document.addEventListener('DOMContentLoaded', function() {
  // Año dinámico en el footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Toggle menú en móvil
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  menuToggle.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
    }
  });
});

// Manejo simple del formulario (no envía a servidor, solo simula)
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msgBox = document.getElementById('form-msg');

  if (!name || !email || !message) {
    msgBox.textContent = 'Por favor completa todos los campos.';
    msgBox.style.color = '#b91c1c';
    return false;
  }

  // Aquí podrías integrar Formspree, EmailJS o un backend.
  // Por ahora mostramos un mensaje de éxito.
  msgBox.textContent = 'Mensaje enviado. Gracias, te respondo pronto.';
  msgBox.style.color = '#065f46';

  // Limpiar formulario
  e.target.reset();

  return false;
}