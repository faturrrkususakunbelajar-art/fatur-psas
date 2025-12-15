function login() {
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;


if (username === "admin" && password === "123") {
window.location.href = "index.html";
} else {
document.getElementById("error").innerText = "Username atau password salah";
}
}
