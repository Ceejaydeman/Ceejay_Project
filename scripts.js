// Basic UI interactions: menu, slider, booking demo
document.addEventListener('DOMContentLoaded', () => {
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav open/close
  const nav = document.getElementById('mainNav');
  const menuBtn = document.getElementById('menuBtn');
  const navClose = document.getElementById('navClose');

  menuBtn.addEventListener('click', () => nav.classList.add('open'));
  navClose.addEventListener('click', () => nav.classList.remove('open'));
  // close when clicking a link
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

  // Simple slider
  const slides = Array.from(document.querySelectorAll('.slide'));
  let idx = 0;
  const show = i => {
    slides.forEach((s, n) => {
      s.classList.toggle('active', n === i);
      s.setAttribute('aria-hidden', n === i ? 'false' : 'true');
    });
  };
  document.getElementById('prevSlide').addEventListener('click', () => {
    idx = (idx - 1 + slides.length) % slides.length;
    show(idx);
  });
  document.getElementById('nextSlide').addEventListener('click', () => {
    idx = (idx + 1) % slides.length;
    show(idx);
  });
  // auto-advance
  let sliderInterval = setInterval(() => { idx = (idx + 1) % slides.length; show(idx); }, 5000);
  // pause on hover
  const heroSlider = document.getElementById('heroSlider');
  heroSlider.addEventListener('mouseenter', () => clearInterval(sliderInterval));
  heroSlider.addEventListener('mouseleave', () => { sliderInterval = setInterval(() => { idx = (idx + 1) % slides.length; show(idx); }, 5000); });

  // booking form demo handler
  const bookingForm = document.getElementById('bookingForm');
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(bookingForm);
    const summary = {
      name: data.get('name'),
      email: data.get('email'),
      checkin: data.get('checkin'),
      checkout: data.get('checkout'),
      room: data.get('roomType')
    };
    alert(`Booking request received (demo).\n\nName: ${summary.name}\nRoom: ${summary.room}\nFrom: ${summary.checkin} to ${summary.checkout}\nWe will contact: ${summary.email}`);
    bookingForm.reset();
  });

  // Simple gallery click -> open in new tab (demo)
  document.getElementById('galleryGrid').addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      window.open(e.target.src, '_blank');
    }
  });

});
