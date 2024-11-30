const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('#navigation');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

function showSection(sectionId) {
  let sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  let selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active');
}

showSection('home');
let slideIndex = 0;
const slides = document.querySelectorAll('.slides');

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 3 seconds
}

showSlides();

// Select all FAQ items
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    // Close other active FAQs
    faqItems.forEach(faq => {
      if (faq !== item) {
        faq.classList.remove('active');
      }
    });
    // Toggle the clicked FAQ
    item.classList.toggle('active');
  });
});

