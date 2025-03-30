if (localStorage.getItem("name") !== null && localStorage.getItem("password") !== null) {
    location.href = "login.html"
}





let inp_name = document.querySelector("#name")
let inp_password = document.querySelector("#password")
let submit = document.querySelector(`[type = "submit"]`)
let check = document.querySelector(`[type = "checkbox"]`)

submit.addEventListener("click" ,(e) => {
    if(inp_name.value !== "" && inp_password.value !== "" && check.checked) {
        e.preventDefault()
        location.href = "login.html";
        localStorage.setItem("name", inp_name.value);
        localStorage.setItem("password", inp_password.value);
    }
})



