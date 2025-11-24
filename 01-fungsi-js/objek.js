// Deklarasi Objek dengan Object Literal
var mahasiswa = {
    nama: "Budi Santoso",
    nim: "12345678",
    jurusan: "RPL",
    
    // Properti berupa Objek (Objek di dalam Objek)
    alamat: {
        kota: "Bandung",
        provinsi: "Jawa Barat"
    },
    
    // Properti berupa Fungsi (Method)
    sapa: function(){
        // Menggunakan 'this' untuk merujuk ke objek sendiri
        return "Halo, nama saya " + this.nama + " dari jurusan " + this.jurusan;
    }
};

console.log("--- Properti ---");
console.log("Nama: " + mahasiswa.nama);          
console.log("Kota: " + mahasiswa.alamat.kota);   

console.log("--- Method ---");
console.log(mahasiswa.sapa());

// Menambah dan Menghapus Properti
mahasiswa.umur = 20;
console.log("Umur: " + mahasiswa.umur);

delete mahasiswa.nim;
console.log("Apakah NIM masih ada? " + ('nim' in mahasiswa)); // Pengecekan