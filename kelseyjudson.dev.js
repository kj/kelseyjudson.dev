function setIsScrolled() {
  if (window.pageYOffset === 0) {
    document.documentElement.classList.remove('is-scrolled');
  } else {
    document.documentElement.classList.add('is-scrolled');
  }
}

setIsScrolled();

window.addEventListener('scroll', () => setIsScrolled());
