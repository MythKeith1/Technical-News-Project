// Animated rotating hero text
const text = document.querySelector('.animated-text');
let words = ["Welcome to The Modern Blog", "Where Ideas Come Alive", "Design. Inspire. Create."];
let i = 0;

setInterval(() => {
  text.textContent = words[i];
  i = (i + 1) % words.length;
}, 4000);

// Navbar active link on scroll
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
