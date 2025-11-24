function muatData() {
    var xhr = new XMLHttpRequest();
    var hasil = document.getElementById("data-result");

    // Definisikan aksi yang akan dilakukan saat status berubah
    xhr.onreadystatechange = function() {
        // Cek jika request SELESAI (readyState = 4) dan BERHASIL (status = 200)
        if (this.readyState == 4 && this.status == 200) {
            // Tampilkan hasil respons dari file JSON
            hasil.innerHTML = "Data berhasil dimuat! <br>Response: " + this.responseText;
        } else if (this.readyState == 4 && this.status != 200) {
            hasil.innerHTML = "Gagal memuat data. Status: " + this.status;
        }
    };

    // Konfigurasi Request: GET, file data.json, Asynchronous (true)
    xhr.open("GET", "data.json", true); 

    // Kirim Request
    xhr.send();

    hasil.innerHTML = "Sedang memuat data..."; // Pesan loading
}