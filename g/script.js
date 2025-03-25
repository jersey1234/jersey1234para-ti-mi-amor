document.addEventListener('DOMContentLoaded', function() {
    // Configura la fecha del próximo encuentro (año, mes-1, día)
    const fechaEncuentro = new Date(2024, 11, 31); // Cambia esta fecha
    
    // Contador regresivo
    function actualizarContador() {
        const ahora = new Date();
        const diferencia = fechaEncuentro - ahora;
        
        if (diferencia <= 0) {
            document.getElementById('dias').textContent = '00';
            document.getElementById('horas').textContent = '00';
            document.getElementById('minutos').textContent = '00';
            document.getElementById('segundos').textContent = '00';
            return;
        }
        
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        
        document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
        document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
        document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
        document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
    }
    
    setInterval(actualizarContador, 1000);
    actualizarContador();
    
    // Tarjetas que giran al hacer clic
    const tarjetas = document.querySelectorAll('.tarjeta');
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', function() {
            this.classList.toggle('flip');
        });
    });
    
    // Desplazamiento suave para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Efecto de aparición al hacer scroll
    const elementos = document.querySelectorAll('.seccion, .item-foto');
    
    function verificarElementos() {
        elementos.forEach(elemento => {
            const elementoTop = elemento.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementoTop < windowHeight - 100) {
                elemento.style.opacity = '1';
                elemento.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Configura las propiedades iniciales para la animación
    elementos.forEach(elemento => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(30px)';
        elemento.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', verificarElementos);
    verificarElementos(); // Verifica al cargar la página
    
    // Reproducir música automáticamente (opcional)
    // const musica = document.getElementById('nuestra-cancion');
    // musica.play().catch(e => console.log("La reproducción automática fue bloqueada"));
});