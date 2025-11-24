// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.nav-links');
  if (nav.style.display === 'flex') nav.style.display = '';
  else nav.style.display = 'flex';
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Skill bar animation
const skills = document.querySelectorAll('.skill-fill');
const onScroll = () => {
  const trigger = window.innerHeight * 0.85;
  skills.forEach(s => {
    const rect = s.getBoundingClientRect();
    if (rect.top < trigger) {
      s.style.width = s.getAttribute('data-strength') + '%';
    }
  });
};
window.addEventListener('scroll', onScroll);
onScroll();

/* --------------------------------------------------
   CONTACT FORM — EmailJS Integration
-------------------------------------------------- */
emailjs.init("O5ao3mSolZhvD7WpB");

const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMsg.textContent = "Please fill all fields.";
    return;
  }

  emailjs.send("service_h73uc9l", "template_4yg9jj5", {
      name: name,
      email: email,
      message: message
    })
    .then(() => {
      formMsg.textContent = "Message sent successfully!";
      form.reset();
      setTimeout(() => (formMsg.textContent = ""), 4000);
    })
    .catch(() => {
      formMsg.textContent = "Message failed to send!";
    });
});
