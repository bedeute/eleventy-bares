const html = document.documentElement
const themeSwitcher = document.getElementById('themeSwitcher')

themeSwitcher.addEventListener('change', () => {
localStorage.theme = themeSwitcher.value

  if (themeSwitcher.value === 'auto') {
    html.classList.remove('is-dark', 'is-light')

  } else if (themeSwitcher.value === 'light') {
    html.classList.add('is-light')
    html.classList.remove('is-dark')

  } else if (themeSwitcher.value === 'dark') {
    html.classList.add('is-dark')
    html.classList.remove('is-light')

  }
})

if (localStorage.theme) {
  themeSwitcher.value = localStorage.theme ?? "auto";
  themeSwitcher.dispatchEvent(new Event("change"));
}