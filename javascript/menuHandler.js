const menu = document.getElementsByClassName("menu")

function doFunction() {
  menu.style.right = "0vw"
  menu.style.border = "3px solid green"
}

menu.onclick = doFunction
