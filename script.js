const sections = document.querySelectorAll("section");

const revealSections = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 120) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealSections);
revealSections();
