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
