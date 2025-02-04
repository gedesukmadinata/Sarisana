// popup
document.addEventListener('DOMContentLoaded', function() {
    // Show popup
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
  
    // Swiper
    const swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
    
    // Close popup kalo diklik diluar popup
    document.querySelector('.popup').addEventListener('click', function(event) {
        if (event.target === this) {
            this.style.display = 'none';
        }
    });
  });
  
  // JavaScript untuk menutup popup lewat X (&times)
  document.querySelector('.popup-close').addEventListener('click', function() {
      document.getElementById('popup').style.display = 'none';
    });
  // popup
  
  // Loading
  document.addEventListener('DOMContentLoaded', function() {
    function hideLoading() {
      document.body.classList.add('loaded');
    }
    setTimeout(hideLoading, 1500);
  });
  // Loading
  
  // Main Slide
  var mainSwiper = new Swiper('.main-swiper', {
      loop: true,
      pagination: {
          el: '.main-swiper .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.main-swiper .swiper-button-next',
          prevEl: '.main-swiper .swiper-button-prev',
      },
  });
  
  // Menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  
  menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
  });

// Menampilkan popup WhatsApp saat scroll sedikit ke bawah
window.addEventListener('scroll', function() {
    var popup = document.getElementById('whatsapp-popup');
    
    // Jika scroll lebih dari 50px ke bawah, tampilkan popup
    if (window.scrollY > 50) {  
        popup.style.display = 'block';  // Tampilkan popup
    } else {
        popup.style.display = 'none';   // Sembunyikan popup jika scroll kembali ke atas
    }
});
