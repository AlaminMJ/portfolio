const more = document.querySelectorAll(".more");
const close = document.querySelectorAll(".close");

more.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.add("active");
  });
});

close.forEach((e) => {
  e.addEventListener("click", (e) => {
    console.log(e.target.parentElement.parentElement.parentElement);
    e.target.parentElement.parentElement.classList.remove("active");
  });
});
