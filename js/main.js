const hamburger = document.querySelector(".menu-hamburger");
const menuList = document.querySelector(".menu-list");
const menuCurtain = document.querySelector(".menu-curtain")

hamburger.addEventListener("click", () => {
menuList.classList.toggle("js-open")
hamburger.classList.toggle("menu-open")
menuCurtain.classList.toggle("curtain-open")
})

menuCurtain.addEventListener("click", () => {
    menuList.classList.remove("js-open")
    hamburger.classList.remove("menu-open")
    menuCurtain.classList.remove("curtain-open") 
})

console.log(hamburger);