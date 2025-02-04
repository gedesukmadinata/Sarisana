// loading
document.addEventListener('DOMContentLoaded', function() {
  function hideLoading() {
    document.body.classList.add('loaded');
  }
  setTimeout(hideLoading, 1500);
});

// Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const cardImages = [
'asset/Produk/Udeng Setengah (7).jpg',
  'asset/Produk/Udeng Setengah (3).jpg',
  'asset/Produk/Kamen (2).jpg',
  'asset/Produk/Kamen (3).jpg',
  'asset/Produk/Saput (6).png',
  'asset/Produk/Kemeja Polos.jpg',
  'asset/Produk/Udeng Lembar (2).png',
  'asset/Produk/Udeng Lembar (6).png',
];

let cardValues = [...cardImages, ...cardImages]; // Menggandakan gambar untuk pasangan
let firstCard, secondCard;
let lockBoard = false;
let matchCount = 0;

const gameBoard = document.querySelector('.game-board');

// Mengacak urutan kartu
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

// Membuat kartu dan menambahkan ke papan permainan
function createCards() {
  shuffle(cardValues);
  cardValues.forEach((value) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `<img src="${value}" alt="Card Image">`;
      card.addEventListener('click', flipCard);
      gameBoard.appendChild(card);
  });
}

// Mengatur logika pembalikan kartu
function flipCard() {
  if (lockBoard || this === firstCard) return;

  this.classList.add('flipped');
  if (!firstCard) {
      firstCard = this;
      return;
  }

  secondCard = this;
  lockBoard = true;

  checkForMatch();
}

// Memeriksa apakah kedua kartu cocok
function checkForMatch() {
  const firstCardImage = firstCard.querySelector('img').src;
  const secondCardImage = secondCard.querySelector('img').src;

  if (firstCardImage === secondCardImage) {
      matchCount++;
      resetCards();
      checkForWin();
  } else {
      setTimeout(() => {
          firstCard.classList.remove('flipped');
          secondCard.classList.remove('flipped');
          resetCards();
      }, 400);
  }
}

// Mereset kartu yang dibalik
function resetCards() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

// Memeriksa apakah semua pasangan ditemukan
function checkForWin() {
  if (matchCount === cardImages.length) {
      // Menampilkan alert bahwa game telah selesai
      alert("Selamat! Anda telah menyelesaikan permainan 🎉");

      // Menghapus elemen pesan selamat jika ada
      const congratsMessage = document.getElementById('congrats-message');
      if (congratsMessage) {
          congratsMessage.remove();
      }
  }
}

// Inisialisasi permainan
createCards();

// Fungsi untuk menampilkan custom alert
function showCustomAlert() {
  document.getElementById('custom-alert-overlay').style.display = 'flex';
}

// Fungsi untuk menutup custom alert
function closeCustomAlert() {
  document.getElementById('custom-alert-overlay').style.display = 'none';
  window.location.reload(); // Reload halaman agar game bisa dimainkan lagi
}

// Periksa apakah semua kartu telah ditemukan
function checkForWin() {
  if (matchCount === cardImages.length) {
      showCustomAlert(); // Tampilkan custom alert
  }
}
function closeCustomAlert() {
  window.location.href = "index.html"; 
}
