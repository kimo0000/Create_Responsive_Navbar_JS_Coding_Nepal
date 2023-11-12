const searchBtn = document.querySelector(".searh"),
  menu = document.querySelector(".menu"),
  closeBtn = document.querySelector(".close"),
  inputEl = document.querySelector(".input"),
  navbarEl = document.querySelector(".navbar");

console.log(searchBtn);
console.log(closeBtn);
console.log(inputEl);
console.log(navbarEl);

searchBtn.addEventListener("click", () => {
  searchBtn.classList.add("hide_search");
  closeBtn.classList.add("show_close");
  navbarEl.classList.remove("show_x_nav");
  //   inputEl.classList.add("show_input");

  if (closeBtn.classList.contains("show_close")) {
    navbarEl.classList.add("hide_nav");
    inputEl.classList.add("show_input");
  }
});

closeBtn.addEventListener("click", () => {
  searchBtn.classList.remove("hide_search");
  closeBtn.classList.remove("show_close");
  navbarEl.classList.remove("show_x_nav");

  navbarEl.classList.remove("hide_nav");
  inputEl.classList.remove("show_input");
});

menu.addEventListener("click", () => {
  navbarEl.classList.toggle("show_x_nav");
  navbarEl.classList.remove("hide_nav");
  inputEl.classList.remove("show_input");
});
