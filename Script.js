document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const mensaje = document.getElementById("mensaje-exito");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    mensaje.textContent = "✅ Tu mensaje ha sido enviado con éxito (simulado). ¡Gracias por contactarme!";
    form.reset();
  });
});