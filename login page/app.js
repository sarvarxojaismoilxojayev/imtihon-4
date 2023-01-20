let login = document.querySelector(".input-1");
let password = document.querySelector(".input-2");
let form = document.querySelector(".form");
let open = document.querySelector("#open")
let close = document.querySelector("#lock")

close.addEventListener("click", (e) => {
  open.style.display = "block"
  close.style.display = "none"
  password.setAttribute("type", "text")
})

open.addEventListener("click", (e) => {
  close.style.display = "block"
  open.style.display = "none"
  password.setAttribute("type", "password")
})


form.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputlogin = login.value;
  let inputPassword = password.value;

  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: inputlogin,
      password: inputPassword,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        console.log("tori");
        window.localStorage.setItem("token", data.token);
        window.location.replace("../book/index.html");
      } else {
        alert("login hato")
        login.value = null;
        password.value = null;
      }
    });
});





