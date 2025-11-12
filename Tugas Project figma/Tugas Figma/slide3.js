// Fungsi untuk tombol "Back"
function goBack() {
    // Dalam aplikasi web nyata, ini akan membawa pengguna ke pertanyaan sebelumnya atau halaman pembuka
    alert('slide2.html');
    // Contoh nyata menggunakan: window.history.back();
}

document.getElementById('questionForm').addEventListener('submit', function(event) {
    // Mencegah form melakukan pengiriman default
    event.preventDefault(); 

    // Mengambil nilai dari textarea
    const answer = document.getElementById('answer').value;

    // Logika pemrosesan jawaban
    if (answer.trim() !== '') {
        alert(`Jawaban Anda: "${answer.substring(0, 25)}..." telah tersimpan (simulasi). Melanjutkan ke pertanyaan berikutnya.`);
        // Di sini Anda akan menambahkan kode AJAX/Fetch untuk mengirim jawaban ke server
        
        // Bersihkan input setelah berhasil
        // document.getElementById('answer').value = ''; 
    } else {
        alert('Mohon tuliskan jawaban Anda sebelum melanjutkan.');
    }
});