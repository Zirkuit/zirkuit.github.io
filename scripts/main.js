function goto(element, link) {
    element.style.transition = ".1s"
    element.style.color = "white"
    element.style.borderColor = "white"
    setTimeout(function(){ 
        element.style.color = ""
        element.style.borderColor = ""
        setTimeout(function(){ 
            element.style.color = "white"
            element.style.borderColor = "white"
            setTimeout(function(){ 
                element.style.color = ""
                element.style.borderColor = ""
                setTimeout(function(){ 
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


function nlToA(n) {
  let o = []
  for (let i=0; i<n.length;i++) o.push(n[i])
  return o
}

function formSubmit(form) {

const formData = new FormData(form)

fetch('https://forms.krüger.it/zirkuit', {
  method: 'POST', // or 'PUT'
  body: formData
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  alert('Successfully applied')
  form.style+=';display:none'
})
.catch((error) => {
  console.error('Error:', error);
  alert('Failed to submit application')
});
}

setTimeout(() => {
  let form
  if ((form = document.getElementsByClassName("applyform")[0])) {
    form.onsubmit = (e) => {
      e.preventDefault()
      formSubmit(form)
      
    }
  }
}, 1000)


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
