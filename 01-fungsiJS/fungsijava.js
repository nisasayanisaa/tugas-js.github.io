// Data yang akan dimanipulasi
var dataBarang = [
    "Buku Tulis",
    "Pensil",
    "Spidol"
];

// Fungsi READ (Menampilkan data)
function showBarang() {
    var listBarang = document.getElementById("list-barang");
    listBarang.innerHTML = ""; // 1. Clear list barang

    for(let i = 0; i < dataBarang.length; i++){
        var btnEdit = "<a href='#' onclick='editBarang("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteBarang("+i+")'>Hapus</a>";
        listBarang.innerHTML += "<li>" + dataBarang[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>";
    }
}

// Fungsi CREATE (Menambahkan data)
function addBarang() {
    var input = document.querySelector("input[name=barang]");
    dataBarang.push(input.value);
    showBarang();
    input.value = "";
}

// Fungsi UPDATE (Mengubah data)
function editBarang(id) {
    var newBarang = prompt("Nama baru", dataBarang[id]);
    if (newBarang !== null && newBarang.trim() !== "") {
        dataBarang[id] = newBarang;
    }
    showBarang();
}

// Fungsi DELETE (Menghapus data)
function deleteBarang(id) {
    var confirmDelete = confirm("Yakin ingin menghapus item ini: " + dataBarang[id] + "?");
    if (confirmDelete) {
        dataBarang.splice(id, 1);
        showBarang();
    }
}

// Panggil fungsi showBarang() saat halaman pertama kali dimuat
showBarang();

// --- Contoh Fungsi Tambahan (untuk Laporan) ---
function kali(a, b) {
    hasilKali = a * b;
    console.log("Hasil kali a*b = " + hasilKali);
}
// Contoh pemanggilan: kali(3, 2);

function bagi(a, b) {
    hasilBagi = a / b;
    return hasilBagi;
}
// Contoh pemanggilan: var hasil = bagi(20, 5);