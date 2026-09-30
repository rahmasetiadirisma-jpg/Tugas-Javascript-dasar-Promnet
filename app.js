/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"
console.log("Skrip app.js berhasil terhubung!");





// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().
const NAMA_KEDAI = "Kopi Untuk Yang PSTI PSTI Aja";
let NAMA_KASIR = "Setiadi";
let SHIFT_KERJA = "Pagi";
console.log ("Kedai:  " + NAMA_KEDAI);
console.log ("Kasir: " + NAMA_KASIR);
console.log ("Shift:" + SHIFT_KERJA);

// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.
NAMA_KASIR = "Rahma Setiadi";
console.log ("Nama Kasir Baru Ditambahkan:" + NAMA_KASIR);



// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.
alert("Selamat Datang Di Website Kedai Kopi PSTI!");
let NAMA_PELANGGAN = prompt("HALLO! Ayo Masukan Nama Kamu Untuk Order");
    if (NAMA_KEDAI) {
alert("Halo!, " + NAMA_PELANGGAN + " yuk kita mulai order");
console.log("Pelanggan:  "+ NAMA_PELANGGAN);
    } else{ 
    alert("Jika Kamu Tidak Memasukan Nama, Kamu akan Disebut ");
    NAMA_PELANGGAN = "Pelanggan Setia";
    console.log("Pelanggan Setia : "  + NAMA_PELANGGAN);
    }


// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().
let POIN_KOPI = 20;
let POIN_MAKANAN = 40;
let POIN_MERCHANDISE = 20;
let JUMLAH_NILAI = POIN_KOPI + POIN_MAKANAN 
+ POIN_MERCHANDISE ;
console.log ("Poinnya: " + NAMA_PELANGGAN);
console.log ("Poin Kopi: " + POIN_KOPI);
console.log ("Poin Makanan:" + POIN_MAKANAN);
console.log ("Poin Merchandise:" + POIN_MERCHANDISE);
console.log ("Total Poin Yang Dimiliki:" + JUMLAH_NILAI);



// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
// 3. Cetak hasil tierMember dan benefit ke Console.
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().
let TIER_MEMBER = "";
let BENEFIT = "";
 if (JUMLAH_NILAI >=100 ) {
TIER_MEMBER = "Platinum" ;
   BENEFIT = "Diskon 20%  + Gratis 1 Minuman Signatur";
 } else if (JUMLAH_NILAI >= 70){
   TIER_MEMBER = "Gold" ; 
    BENEFIT = "Diskon 10% Setiap Pembelian";
}else if (JUMLAH_NILAI >=40 ){
   TIER_MEMBER = "Silver"; 
    BENEFIT = "Diskon 5% Setiap Beli Makanan";
} else {
    TIER_MEMBER = "Bronze";
    BENEFIT = "Member Reguler, Kumpulkan Poin Untuk Dapat Banyak Benefit"
}
console.log ("Tier Member: " + TIER_MEMBER);
console.log ("Benefit Yang Kamu Punya:" + BENEFIT);
alert (
    "Hasil Member: " + NAMA_PELANGGAN + "\n" + 
    "Jumlah Poin Kamu: " + JUMLAH_NILAI + "\n" + 
    "Tier Member:" + TIER_MEMBER + "\n" + 
    "Benefit: " + BENEFIT

);


// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.
function HITUNG_TOTAL_POIN (P1, P2, P3){
    return  P1 + P2 + P3; 
}



// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.
function MENENTUKAN_TIER_MEMBER (TIER_MEMBER){
    if (TIER_MEMBER >= 100) return "Platinum";
    if (TIER_MEMBER >= 70) return "Gold";
    if (TIER_MEMBER >= 40) return "Silver";
    return "Bronze";
}



// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.
let POIN_PELANGGAN_B = HITUNG_TOTAL_POIN (35, 25, 20);
let TIER_MEMBER_PELANGGAN_B = MENENTUKAN_TIER_MEMBER (35, 25, 20);
let POIN_PELANGGAN_C = HITUNG_TOTAL_POIN (15, 10, 5);
let TIER_MEMBER_PELANGGAN_C = MENENTUKAN_TIER_MEMBER (15, 10, 5);
console.log ("Poin Yang Dimiliki Pelanggan B :" + POIN_PELANGGAN_B);
console.log ("Tier Member Pelanggan B: " + TIER_MEMBER_PELANGGAN_B);
console.log ("Poin Yang Dimiliki Pelanggan C :" + POIN_PELANGGAN_C);
console.log ("Tier Member Pelanggan C: " + TIER_MEMBER_PELANGGAN_C);




// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.
let MENU_REKOMENDASI = [
    "Aren Latte",
    "Americano",
    "Kopi Susu Signatur",
    "Nasi Goreng Kampung",
    "Ayam Garang Asem",
    "Paket Ayam",
    "Teh Bunga Telam",
    "Mix Platter"
];


// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.
console.log ("Menu Rekomendasi :" + MENU_REKOMENDASI);
//initu perintahnya sama kaya yang no 6C ya kang?


// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");
console.log("=== MENU BEST SELLER ===");
for(let i = 0; i < MENU_REKOMENDASI.length; i++){
    console.log ((i + 1 ) + "." + MENU_REKOMENDASI [i]); }


   console.log("Total Menu Best Seller: 8");
console.log("=== TUGAS MANDIRI TELAH SELESAI DENGAN SUKSES!!! ===");  
