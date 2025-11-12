// Fungsi untuk tombol "Back"
function goBack() {
    alert('Simulasi: Kembali ke pertanyaan sebelumnya.');
    // Contoh nyata: window.history.back();
}

document.getElementById('activitiesForm').addEventListener('submit', function(event) {
    // Mencegah pengiriman formulir standar
    event.preventDefault(); 

    const answer = document.getElementById('activitiesAnswer').value;

    if (answer.trim() !== '') {
        const shortAnswer = answer.length > 30 ? answer.substring(0, 30) + '...' : answer;
        alert(`Jawaban tersimpan: "${shortAnswer}". Melanjutkan ke pertanyaan berikutnya.`);
        // Di sini Anda akan mengirim data ke server
        
    } else {
        alert('Mohon isi jawaban Anda sebelum melanjutkan.');
    }
});