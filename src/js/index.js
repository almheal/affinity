@@include('./transfusion.js');
@@include('./menu.js');

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
