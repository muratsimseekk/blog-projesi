// Mobil navigasyon menüsü
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Menü linklerine tıklandığında menüyü kapat
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Sayfa scroll olduğunda navbar'ı gölgeli yap
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 2px 20px rgba(220, 38, 38, 0.15)";
    } else {
      navbar.style.boxShadow = "0 2px 20px rgba(220, 38, 38, 0.1)";
    }
  });
});
