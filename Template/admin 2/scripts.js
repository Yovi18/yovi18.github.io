const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text"),
      conten = body.querySelector(".conten");

toggle.addEventListener("click",() => {
  sidebar.classList.toggle("close"),
  conten.classList.toggle("tutup")
});

modeSwitch.addEventListener("click",() => {
  body.classList.toggle("dark")
});