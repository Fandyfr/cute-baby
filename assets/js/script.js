const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

menuIcon.addEventListener('click', function() {
    this.classList.toggle('rotate-90');
});