let navbar = document.getElementById("mainNav");
let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
    navbar.classList.remove('unsticky');
  } else {
    navbar.classList.remove('sticky');
    navbar.classList.add('unsticky');
  }
});