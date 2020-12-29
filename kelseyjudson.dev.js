// Dropdown menus

document.querySelector('.has-dropdown').addEventListener('click', event => {
  if (event.target.closest('.dropdown') === null) {
    event.preventDefault();
    event.currentTarget.classList.toggle('is-open');
  }
});

document.documentElement.addEventListener('click', event => {
  if (event.target.closest('.has-dropdown') === null) {
    document.querySelectorAll('.has-dropdown').forEach(element => element.classList.remove('is-open'));
  }
});

// Lang

function getCurrentLang() {
  const match = location.pathname.match(/^\/(\w\w)\//);

  if (match) {
    return match[1];
  } else {
    return null;
  }
}

function getLang() {
  const preferredLang = localStorage.getItem('lang');

  if (preferredLang) {
    return preferredLang;
  }

  const navigatorLang = navigator.language.slice(0, 2);

  switch (navigatorLang) {
  case 'en':
    return setLang('en');
  case 'es':
    return setLang('es');
  default:
    return setLang('en');
  }
}

function setLang(lang) {
  localStorage.setItem('lang', lang);

  return lang;
}

function redirectToPreferredLang() {
  const currentLang = getCurrentLang();
  const lang = getLang();

  if (currentLang === null || currentLang !== lang) {
    window.location = window.location.pathname
      .replace(/^\/(\w\w)\//, '/')
      .replace(/^/, `${lang}`);
  }
}

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
