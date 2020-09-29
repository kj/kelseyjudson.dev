// Dropdown menu

document.querySelector('.has-dropdown').addEventListener('click', event => {
  if (event.target.closest('.dropdown') === null) {
    event.preventDefault();
    event.currentTarget.classList.toggle('is-open');
  }
});

// Scroll

function setIsScrolled() {
  if (window.pageYOffset === 0) {
    document.documentElement.classList.remove('is-scrolled');
  } else {
    document.documentElement.classList.add('is-scrolled');
  }
}

setIsScrolled();

window.addEventListener('scroll', () => setIsScrolled());
