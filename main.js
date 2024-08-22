// Select Elements
let navLinks = document.querySelectorAll("header nav li a");
let toggleMenu = document.querySelector("header nav .toggle-menu");
let landing = document.querySelector(".landing");
let leftAngle = document.querySelector(".landing .left");
let rightAngle = document.querySelector(".landing .right");
let bullets = document.querySelectorAll(".landing .bullets li");
let shuffles = document.querySelectorAll(".portfolio .shuffle li");
let imgsBox = document.querySelectorAll(".portfolio .imgs-container .box");
let aboutSec = document.querySelector(".about");
let statsNum = document.querySelectorAll(".stats .box .number");
let skillSec = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".skills .prog span");

// General Options
let currentIndex = 1;
let interval = 6600;

// Add Active Class On Clicked Link [Header]
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      e.currentTarget.classList.add("active");
    });
  });
});

// Show Navbar When Click on Burger Icon
toggleMenu.onclick = function () {
  this.classList.toggle("clicked");
};

// Change Landing Background Image [Landing Page]
let imgs = [
  "./images/design-features.jpg",
  "./images/landing.jpg",
  "./images/subscribe.jpg",
];

rightAngle.onclick = function () {
  if (currentIndex < imgs.length - 1) {
    currentIndex++;
    landing.style.backgroundImage = `url(${imgs[currentIndex]})`;
    addBulletActive(currentIndex);
  }
};
leftAngle.onclick = function () {
  if (currentIndex > 0) {
    currentIndex--;
    landing.style.backgroundImage = `url(${imgs[currentIndex]})`;
    addBulletActive(currentIndex);
  }
};

function addBulletActive(index) {
  bullets.forEach((li) => {
    li.classList.remove("active");
    bullets[index].classList.add("active");
  });
}

// Add Active Class On Clicked Shuffle [Portfolio]
shuffles.forEach((shuffle) => {
  shuffle.addEventListener("click", (e) => {
    shuffles.forEach((shuffle) => {
      shuffle.classList.remove("active");
      e.currentTarget.classList.add("active");
    });
    filteredImg(shuffle.dataset.cat);
  });
});

function filteredImg(value) {
  imgsBox.forEach((box) => {
    box.style.display = "none";
    if (box.classList.contains(value)) box.style.display = "block";
    else if (value == "all") box.style.display = "block";
  });
}

// Stats Increase Animation On Scroll [About Us]
let started = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >= aboutSec.offsetTop) {
    if (!started) {
      statsNum.forEach((num) => statsIncrease(num));
    }
    started = true;
  }
  if (window.scrollY >= skillSec.offsetTop) {
    // Our Skills Animation [Our Skills]
    progressSpans.forEach((span) => span.style.width = span.dataset.progress);
  }
});

function statsIncrease(el) {
  let goal = el.dataset.stat;
  let duration = interval / goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, duration);
}
