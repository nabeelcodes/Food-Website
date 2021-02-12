const burger = document.querySelector("#burger-icon");
const navMenu = document.querySelector("#nav-menu");

burger.addEventListener("click", () => {
   if (navMenu.classList.contains("hidden")) {
      navMenu.classList.remove("hidden");
   } else {
      navMenu.classList.add("hidden");
   }
});
