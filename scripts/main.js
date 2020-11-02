function goto(element, link) {
  element.style.transition = ".1s"
  element.style.color = "white"
  element.style.borderColor = "white"
  setTimeout(function () {
    element.style.color = ""
    element.style.borderColor = ""
    setTimeout(function () {
      element.style.color = "white"
      element.style.borderColor = "white"
      setTimeout(function () {
        element.style.color = ""
        element.style.borderColor = ""
        setTimeout(function () {
          element.style.transition = ""
          if (link === '#') {
            alert('Page not ready yet')
          } else {
            window.location.href = link
          }
        }, 100);
      }, 100);
    }, 100);
  }, 100);
}

function interceptClickEvent(e) {
  let href
  var target = e.target || e.srcElement

  while (target) {
    if (target.tagName === 'A') {
      href = target.getAttribute('href')

      e.preventDefault()
      goto(target, href)

      break
    }

    target = target.parentElement
  }
}

// listen for link click events at the document level
if (document.addEventListener) {
  document.addEventListener('click', interceptClickEvent)
} else if (document.attachEvent) {
  document.attachEvent('onclick', interceptClickEvent)
}