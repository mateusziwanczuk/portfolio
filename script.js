(function() {
    function trackScroll() {
      let scrolled = window.pageYOffset;
      if (scrolled > 500) {
        goTopBtn.classList.add('back-to-top-button-show');
      }
      if (scrolled < 500) {
        goTopBtn.classList.remove('back-to-top-button-show');
      }
    }
    let goTopBtn = document.querySelector('.back-to-top-button');
    window.addEventListener('scroll', trackScroll);
  })();


function trackScroll() {
  const about = document.getElementById("menu-aboutme");
  const aboutLink = document.querySelector('.menu__about');
  const aboutScroll = about.offsetTop - 100;
  const skills = document.getElementById("menu-skills");
  const skillsLink = document.querySelector('.menu__skills');
  const skillsScroll = skills.offsetTop - 100;
  const projects = document.getElementById("menu-projects");
  const projectsLink = document.querySelector('.menu__projects');
  const projectsScroll = projects.offsetTop - 100;
  const contact = document.getElementById("menu-contact");
  const contactLink = document.querySelector('.menu__contact');
  const contactScroll = contact.offsetTop - 150;
  let scrolled = window.pageYOffset;
  if (scrolled >= aboutScroll && scrolled < skillsScroll) {
      aboutLink.style.marginLeft = "8%";
      skillsLink.style.marginLeft = "";
      projectsLink.style.marginLeft = "";
      contactLink.style.marginLeft = "";
  } else if (scrolled < aboutScroll) {
      aboutLink.style.marginLeft = "";
      skillsLink.style.marginLeft = "";
      projectsLink.style.marginLeft = "";
      contactLink.style.marginLeft = "";
  } else if (scrolled >= skillsScroll && scrolled < projectsScroll) {
      aboutLink.style.marginLeft = "";
      skillsLink.style.marginLeft = "8%";
      projectsLink.style.marginLeft = "";
      contactLink.style.marginLeft = "";
  } else if (scrolled >= projectsScroll && scrolled < contactScroll) {
      aboutLink.style.marginLeft = "";
      skillsLink.style.marginLeft = "";
      projectsLink.style.marginLeft = "8%";
      contactLink.style.marginLeft = "";
  } else if (scrolled >= contactScroll) {
      aboutLink.style.marginLeft = "";
      skillsLink.style.marginLeft = "";
      projectsLink.style.marginLeft = "";
      contactLink.style.marginLeft = "8%";
  };
};  
window.addEventListener("scroll", trackScroll)
