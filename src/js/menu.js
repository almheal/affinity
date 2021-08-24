

const menu = document.querySelector('[data-menu]')
const openButton = document.querySelector('[data-open-menu]')

openButton.addEventListener('click', toggleMenu)


function toggleMenu(){
  const closeButton = document.querySelector('[data-close-menu]')
  menu.classList.toggle('active')
  closeButton.addEventListener('click', toggleMenu)
}