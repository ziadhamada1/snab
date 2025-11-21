// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Scroll to Top Button
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Dark/Light Mode
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.innerHTML = document.body.classList.contains('dark-mode') 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
});






/* ===== معرض الصور Full Screen ===== */
const galleryImages = document.querySelectorAll(".gallery-img");
const viewer = document.getElementById("fullscreenViewer");
const fullImage = document.getElementById("fullImage");
const closeViewer = document.getElementById("closeViewer");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    fullImage.src = img.src;
    viewer.style.display = "flex";
  });
});

closeViewer.addEventListener("click", () => {
  viewer.style.display = "none";
});

viewer.addEventListener("click", (e) => {
  if (e.target === viewer) viewer.style.display = "none";
});







const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
let mouse = { x: null, y: null };

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

function createStars() {
  for (let i = 0; i < 350; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.5,
    });
  }
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    // حركة بسيطة
    star.y -= star.speed;
    if (star.y <= 0) star.y = canvas.height;

    // تأثير الماوس (سحب النجوم)
    if (mouse.x && mouse.y) {
      let dx = star.x - mouse.x;
      let dy = star.y - mouse.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 120) {
        star.x += dx / dist * 2;
        star.y += dy / dist * 2;
      }
    }

ctx.shadowColor = "#ffd700";
ctx.shadowBlur = 10;
ctx.fillStyle = "#fff8b0";


    ctx.fillRect(star.x, star.y, star.size, star.size);
  });

  requestAnimationFrame(animateStars);
}

createStars();
animateStars();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

