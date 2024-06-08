document.getElementById("dark-btn").addEventListener("click", function () {
  document.body.classList.add("bg-dark", "text-light");
  document.body.classList.remove("bg-light", "text-dark");
});

document.getElementById("light-btn").addEventListener("click", function () {
  document.body.classList.add("bg-light", "text-dark");
  document.body.classList.remove("bg-dark", "text-light");
});

document.getElementById("enter-btn").addEventListener("click", function () {
  const input = document.getElementById("factorial-input").value;
  let factorial = 1;
  for (let i = 1; i <= input; i++) {
    factorial *= i;
  }
  document.getElementById(
    "result-screen"
  ).innerText = `${input}! = ${factorial}`;
});
