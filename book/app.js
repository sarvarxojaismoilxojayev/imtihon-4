let token = localStorage.getItem("token")

if (!token) window.location.replace("../login page/index.html")

let form = document.querySelector(".header-form")
let input = document.querySelector(".search-input")

let result

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let value = input.value

    function getBookList() {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}7D&startIndex=20&maxResults=20&orderBy=newest`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })}


          getBookList()

    e.target.reset();
})


let logout = document.querySelector(".btn")

logout.addEventListener("click", (e) => {
    location.replace("../login page/index.html")
})

