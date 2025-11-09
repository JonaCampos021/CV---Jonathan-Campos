const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
} else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Script para el modal del título de bachiller
const modal = document.getElementById('certModal');
const modalImg = document.getElementById('certImage');
const closeModal = document.querySelector('.close-modal');

// Mapeo de certificaciones a imágenes
const certData = {
    bachiller: {
        img: 'bachi.jpg', // Reemplaza con la ruta correcta de tu imagen
    }
};

// Manejar clics en el botón de ver título
document.querySelectorAll('.view-diploma-btn').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const certId = this.getAttribute('data-cert');
        const cert = certData[certId];
        
        if (cert) {
            modal.style.display = 'block';
            modalImg.src = cert.img;
        }
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});