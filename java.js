const section = document.querySelector('.cursor-col-resize').closest('section');
const overlay = document.querySelector('.absolute.inset-0.overflow-hidden');
const dragBar = document.querySelector('[style*="left: 64.2149%"]');

let isDragging = false;

function getPercent(e, rect) {
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  let percent = ((clientX - rect.left) / rect.width) * 100;
  return Math.min(Math.max(percent, 0), 100);
}

function updateSlider(percent) {
  overlay.style.clipPath = `inset(0px ${100 - percent}% 0px 0px)`;
  dragBar.style.left = `${percent}%`;
}

section.addEventListener('mousedown', (e) => {
  isDragging = true;
  updateSlider(getPercent(e, section.getBoundingClientRect()));
});

section.addEventListener('touchstart', (e) => {
  isDragging = true;
  updateSlider(getPercent(e, section.getBoundingClientRect()));
}, { passive: true });

window.addEventListener('mouseup', () => isDragging = false);
window.addEventListener('touchend', () => isDragging = false);

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  updateSlider(getPercent(e, section.getBoundingClientRect()));
});

window.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  updateSlider(getPercent(e, section.getBoundingClientRect()));
}, { passive: true });

section.addEventListener('mouseenter', () => {
  section.style.cursor = 'col-resize';
  if (hint) hint.style.opacity = '1';
});

section.addEventListener('mouseleave', () => {
  section.style.cursor = 'default';
  if (hint) hint.style.opacity = '0';
});

const finishes = [
  {
    name: "Amberwood",
    image: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/8ac215d3a_Amberwood.JPG",
  },
  {
    name: "Honey Teak",
    image: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/0ec0f10fa_Honey.JPG",
  },
  {
    name: "Mahogany Flame",
    image: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/f0b2431c8_Mahoganny.JPG",
  },
  {
    name: "Jarrah Brown",
    image: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/db3261a53_Brown.JPG",
  }
];

const finishSection = document.querySelector('#finishes');
const finishBgImg = finishSection.querySelector('.absolute.inset-0 img');
const finishButtons = finishSection.querySelectorAll('.grid button');
const shownLabel = finishSection.querySelector('.text-center p .text-primary');

// Create a white fade overlay on top of the background
const fadeOverlay = document.createElement('div');
fadeOverlay.style.cssText = `
  position: absolute;
  inset: 0;
  background: white;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.75s ease;
  z-index: 1;
`;
finishSection.querySelector('.absolute.inset-0').appendChild(fadeOverlay);

function switchFinish(i) {
  fadeOverlay.style.opacity = '1';

  setTimeout(() => {
    finishBgImg.src = finishes[i].image;
    fadeOverlay.style.opacity = '0';
  }, 750);

  if (shownLabel) shownLabel.textContent = finishes[i].name;

  finishButtons.forEach((b, j) => {
    if (j === i) {
    b.classList.remove('border-white/10');
    b.classList.add('border-primary', 'shadow-xl', 'ring-8', 'ring-primary');
    b.style.boxShadow = '0 12px 35px rgba(210, 100, 20, 0.65)';
    } else {
      b.classList.remove('border-primary', 'shadow-xl', 'ring-8', 'ring-primary');
      b.classList.add('border-white/10');
      b.style.boxShadow = '';
    }
  });
}

finishButtons.forEach((btn, i) => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    btn.style.transform = 'translateY(-4px)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    btn.style.transform = 'translateY(0)';
  });

  btn.addEventListener('click', () => switchFinish(i));
});

