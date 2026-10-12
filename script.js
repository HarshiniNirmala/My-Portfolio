const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navMenu.classList.remove('open')));

// Gentle pointer tilt on the profile card for a subtle 3D effect.
const card = document.querySelector('.profile-card');
const visual = document.querySelector('.hero-visual');
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && card && visual) {
  visual.addEventListener('mousemove', (event) => {
    const rect = visual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 12 - 4}deg) rotateX(${-y * 10 + 3}deg) translateY(-3px)`;
  });
  visual.addEventListener('mouseleave', () => card.style.transform = 'rotateY(-8deg) rotateX(4deg)');
}
