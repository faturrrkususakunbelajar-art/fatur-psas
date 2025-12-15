function tambahProduk() {
const nama = document.getElementById("namaProduk").value;
const deskripsi = document.getElementById("deskripsiProduk").value;
const gambar = document.getElementById("gambarProduk").files[0];


if (!nama || !deskripsi || !gambar) {
alert("Lengkapi data produk!");
return;
}


const reader = new FileReader();
reader.onload = function(e) {
const produkList = document.getElementById("produkList");
const card = document.createElement("div");
card.className = "card";
card.innerHTML = `
<h3>${nama}</h3>
<p>${deskripsi}</p>
<img src="${e.target.result}" width="150">
`;
produkList.appendChild(card);
};
reader.readAsDataURL(gambar);
}


function logout() {
window.location.href = "login.html";
}
