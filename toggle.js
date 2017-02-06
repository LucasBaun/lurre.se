var nav = true
function navbar() {
  if (nav) {
    document.getElementById('nav').style.display = 'flex'
    document.getElementById('menubutton').style.color = '#990000'
  } else {
    document.getElementById('nav').style.display = 'none'
    document.getElementById('menubutton').style.color = '#fff'
  }
  nav =! nav
}
