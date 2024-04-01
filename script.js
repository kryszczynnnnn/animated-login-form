const registerBtn = document.getElementById("sign-up");
const loginBtn = document.getElementById("sign-in");
const container = document.getElementById("container");

registerBtn.addEventListener("click", function() {
    container.classList.add("active");
})

loginBtn.addEventListener("click", function() {
    container.classList.remove("active");
})