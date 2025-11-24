// 1. Mengakses Elemen
var judul = document.getElementById("judul-utama");
var paragrafPertama = document.querySelector(".paragraf");

// 2. Manipulasi Konten dan Style saat dimuat
judul.style.color = "red";
judul.style.backgroundColor = "yellow";
judul.setAttribute("title", "Ini diubah oleh DOM saat load");

// 3. Fungsi Manipulasi saat di-klik
function ubahTeks() {
    // Mengubah konten HTML
    judul.innerHTML = "DOM Berhasil Diubah!"; 
    // Mengubah konten Teks
    paragrafPertama.textContent = "Teks ini sudah diganti oleh DOM."; 
}

// 4. Membuat dan Menambah Elemen Baru
var kontenDiv = document.getElementById("konten-baru");
var elemenList = document.createElement("ul");
var elemenItem = document.createElement("li");
elemenItem.textContent = "Item List Baru dibuat via DOM";

// Menyambungkan elemen
elemenList.appendChild(elemenItem);
kontenDiv.appendChild(elemenList);