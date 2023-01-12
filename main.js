const smallMenu = document.getElementById("small-menu");
const close = document.getElementById("close");
const menuItems = document.querySelectorAll(".menu-item");
close.addEventListener("click", function(){
  smallMenu.style.display="none";
})

const burger = document.getElementById("burger");
burger.addEventListener("click", function(){
  smallMenu.style.display="block";
})

menuItems.forEach(elem=>{
  elem.addEventListener("click", function(){
    smallMenu.style.display="none";
  })
})