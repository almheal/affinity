const hoverItems = document.querySelectorAll('[data-transfusion]')

hoverItems.forEach((item) => {
  const spanList = splitTextToSpan(item.textContent)
  const transition = parseFloat(
    window.getComputedStyle(item).transition.split(' ')[1]
  )
  let transitionDelay = 0
  item.textContent = ''
  for (let i = 0; i < spanList.length; i++) {
    if (i !== 0) {
      transitionDelay += transition
      spanList[i].style.transition = `all ${transition}s linear ${transitionDelay}s`
    }else{
      spanList[i].style.transition = `all ${transition}s linear 0s`
    }
    item.appendChild(spanList[i])
  }
})

function splitTextToSpan(str) {
  const textArr = str.trim().split('')
  return textArr.map((item) => {
    const span = document.createElement('span')
    span.textContent = item
    return span
  })
}
;


const menu = document.querySelector('[data-menu]')
const openButton = document.querySelector('[data-open-menu]')

openButton.addEventListener('click', toggleMenu)


function toggleMenu(){
  const closeButton = document.querySelector('[data-close-menu]')
  menu.classList.toggle('active')
  closeButton.addEventListener('click', toggleMenu)
};

//change intro video when hover

const videoButtons = document.querySelectorAll('[data-intro-video]')

videoButtons.forEach((el) => el.addEventListener('mouseover', changeVideo))

function changeVideo(e) {
  const videos = document.querySelectorAll('[data-intro-video]')
  const $el = e.currentTarget
  const nameVideo = $el.dataset.introVideo
  videos.forEach((el) => {
    el.classList.remove('active')
    const video = el.dataset.introVideo
    if (video === nameVideo) {
      el.classList.add('active')
    }
  })
}
