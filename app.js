const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const question = btn.parentElement.parentElement;
    question.classList.toggle("show-link");
  });
});
