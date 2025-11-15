// ✅ Set min date to today
document.addEventListener('DOMContentLoaded', function() {
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
});

// ✅ Hero slideshow
const slides = document.querySelectorAll('.hero-bg .slide');
let current = 0;

function changeSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}
setInterval(changeSlide, 4000);

// ✅ Booking form logic
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const type = document.getElementById('consultationType').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('timeSlot').value;
  const msg = document.getElementById('message').value.trim();

  const doctorNumber = "233536630989";
  const textMessage = encodeURIComponent(
    `👋 Hello Doctor, I just booked a consultation.\n\n🧍 Name: ${name}\n📧 Email: ${email}\n📞 Phone: ${phone}\n💬 Type: ${type}\n📅 Date: ${date}\n🕒 Time: ${time}\n\n🩺 Additional Info: ${msg}`
  );

  const whatsappURL = `https://wa.me/${doctorNumber}?text=${textMessage}`;
  document.getElementById('whatsappLink').href = whatsappURL;

  // Show animated success box
  document.getElementById('successBox').classList.remove('d-none');
  document.getElementById('bookingForm').reset();
  document.getElementById('successBox').scrollIntoView({ behavior: 'smooth', block: 'center' });
});
