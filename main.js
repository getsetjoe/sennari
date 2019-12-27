var logo = document.getElementById('logo')

setTimeout(function () {
  logo.classList.add('reveal')
}, 500)

window.addEventListener('hashchange', () => {
  let txt = '“Best cinematic rock band of the century”'

  if (document.location.hash === '#vol1') {
    txt = 'The director\'s cut'
    document.body.classList.add('vol1')
    document.body.classList.remove('vol2')
  } else {
    document.body.classList.add('vol2')
    document.body.classList.remove('vol1')
  }

  document.getElementById('tagline').textContent = txt
})
