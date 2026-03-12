//Control Flow

let belanja = parseFloat(prompt("Masukkan jumlah belanja Anda:"));


if (belanja >= 50000) {
    let diskon = belanja * 0.3;
    let totalBelanja = belanja - diskon;
    alert("<br>Dapat diskon 30% untuk pembelian di atas 50.000!</br>Total belanja setelah diskon: " + totalBelanja);
} 
else if (belanja >= 20000) {
    let diskon = belanja * 0.1;
    let totalBelanja = belanja - diskon;
    alert("<br>Dapat diskon 10% untuk pembelian di atas 20.000!</br>Total belanja setelah diskon: " + totalBelanja);
}
else  {
    alert("Tidak mendapatkan diskon untuk pembelian di bawah 20.000! Total belanja: " + belanja);
}