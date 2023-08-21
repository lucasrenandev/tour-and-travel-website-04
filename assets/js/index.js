const header = document.getElementById("header")
const navBar = document.querySelector(".navbar")
const menuIcon = document.getElementById("menu-icon")

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 0) 
})

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("open")
    this.classList.toggle("bx-x")
})

window.addEventListener("scroll", function() {
    menuIcon.classList.remove("bx-x")
    navBar.classList.remove("open")
})