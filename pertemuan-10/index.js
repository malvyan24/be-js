/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
console.log(`Download selesai`);
console.log(`Hasil Download: ${result}`);
};

/**
 * Fungsi untuk download file
 * @returns {Promise<string>} - Promise yang akan menyelesaikan dengan nama file yang didownload
 */
const download = () => {
return new Promise((resolve) => {
setTimeout(() => {
const result = "windows-10.exe";
resolve(result);
}, 3000);
});
};

// Menggunakan async/await untuk menangani promise
const lakukanDownload = async () => {
try {
const result = await download();
showDownload(result);
} catch (error) {
console.error(`Error selama proses download: ${error.message}`);
}
};

// Memanggil fungsi untuk memulai proses download
lakukanDownload();
