//jawaban no 1
const hariPiket = ["Sabtu", "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat"];

for (let i = 0; i <hariPiket.length; i++) {
  console.log(`Piket hari ke-${i + 1}: ${hariPiket[i]}`);
}


//jawaban no 2
const tabungansantri = [5000, 3000, 0, 7000, 2000, 10000];
let total = 0;
let hariKosong = [];

for (let i = 0; i < tabungansantri.length; i++) {
  total += tabungansantri[i];
  if (tabungansantri[i] === 0) {
    hariKosong.push(i + 1);
  }
}
let rataRata = (total / tabungansantri.length).toFixed(2);
console.log("Total tabungan selama 6 hari: Rp" + total);
console.log("Rata-rata tabungan per hari: Rp" + rataRata);
console.log("Hari ke berapa saja santri tidak menabung: Hari ke-" + hariKosong.join(", "));

//jawaban no 3
let kuota = 8;
let antrean = 1;

while (antrean <= kuota) {
  console.log(`Santri ke-${antrean} sedang setor hafalan...`);
  antrean++; 
}
console.log("Kuota setoran hari ini telah penuh.");

//jawaban no 4
let namaUstadz = "";
let simulasiInput = ["", "", "mas alvin"];
let index = 0;

do {
  namaUstadz = simulasiInput[index];
  index++;
} while (namaUstadz === "");
console.log("Ustadz penanggung jawab piket tercatat: " + namaUstadz);

//jawaban no 5
const nilaiTahfidz = [88, -1, 95, 100, 70, -5, 60, 100, 45, 99];

for (let i = 0; i < nilaiTahfidz.length; i++) {
  let urutan = i + 1;
  let nilai = nilaiTahfidz[i];

  if (nilai < 0) {
    console.log(`Data tidak valid dilewati: ${urutan}`);
    continue;
  }

  if (nilai === 100) {
    console.log(`Nilai sempurna ditemukan pada data ke-${urutan}. Pemeriksaan dihentikan.`);
    break;
  }
  console.log(`Nilai ke-${urutan}: valid`);
}

//jawaban soal bonus
const statusPiket = ["hadir", "izin", "hadir", "alpa", "hadir", "sakit", "hadir"];
let jumlahHadir = 0;
let jumlahTidakHadir = 0;

for (let i = 0; i < statusPiket.length; i++) {
  if (statusPiket[i] === "hadir") {
    jumlahHadir++;
    continue;
  }
  jumlahTidakHadir++;
}
let persentaseKehadiran = ((jumlahHadir / statusPiket.length) * 100).toFixed(2);

console.log(`Jumlah hari hadir: ${jumlahHadir}`);
console.log(`Jumlah hari tidak hadir: ${jumlahTidakHadir}`);
console.log(`Persentase kehadiran: ${persentaseKehadiran}%`);
