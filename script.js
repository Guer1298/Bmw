// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const message = form.querySelector("textarea").value.trim();
  
      if (!name || !email || !message) {
        alert("Por favor, completa todos los campos antes de enviar.");
        return;
      }
  
      // Simular envío (puede integrarse con EmailJS o back-end real)
      alert(`Gracias ${name}, hemos recibido tu mensaje. Te contactaremos pronto.`);
      form.reset();
    });
  
    // Scroll suave a secciones
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });

  // Motor sound starts when user interacts (autoplay restrictions)
  document.addEventListener('click', () => {
    const audio = document.getElementById('engineSound');
    if (audio.paused) {
      audio.play().catch(e => console.log('Audio autoplay blocked.'));
    }
  });

  // Scroll parallax effect
  window.addEventListener('scroll', function () {
    const video = document.querySelector('.hero-video-bg');
    const offset = window.scrollY * 0.3;
    video.style.transform = `translateY(${offset}px)`;
  });

    // Toggle menu for mobile
    
    document.getElementById("menuToggle").addEventListener("click", () => {
      document.querySelector(".nav-menu").classList.toggle("active");
    });

    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
    
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
    
        const texto = `👋 Hola, soy *${nombre}* y quiero agendar un test drive para el BMW 320i M Sport. 📧 Mi correo es: ${correo}. %0A🗓️ Detalles: ${mensaje || 'Sin mensaje adicional.'}`;
    
        const telefono = "573235902681"; // Tu número con código país (sin "+" ni espacios)
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    
        window.open(url, '_blank');

  


    }    );