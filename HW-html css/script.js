const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.onscroll = () => {
    let current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 50) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
};

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger-menu');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

// Menghilangkan hamburger menu setelah mengklik link
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
    });
});

const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');
const destinasiContent = document.getElementById('destinasi-content');

scrollLeftButton.addEventListener('click', () => {
    destinasiContent.scrollBy({
        left: -300, // Scroll ke kiri
        behavior: 'smooth'
    });
});

scrollRightButton.addEventListener('click', () => {
    destinasiContent.scrollBy({
        left: 300, // Scroll ke kanan
        behavior: 'smooth'
    });
});



