// Fungsi untuk tombol "Back"
function goBack() {
    alert('Simulasi: Kembali ke pertanyaan sebelumnya.');
    // Contoh nyata: window.history.back();
}

document.getElementById('momentForm').addEventListener('submit', function(event) {
    // Mencegah form melakukan pengiriman default
    event.preventDefault(); 

    // Mengambil nilai dari textarea
    const answer = document.getElementById('momentAnswer').value;

    // Logika pemrosesan jawaban
    if (answer.trim() !== '') {
        const shortAnswer = answer.length > 30 ? answer.substring(0, 30) + '...' : answer;
        alert(`Momen Terbaik Anda: "${shortAnswer}" telah tersimpan (simulasi). Terima kasih!`);
        
        // Di sini Anda akan menambahkan kode AJAX/Fetch untuk mengirim data ke server
        
        // Contoh untuk melanjutkan ke halaman 'Terima Kasih'
        // window.location.href = 'thankyou.html';
        
    } else {
        alert('Mohon ceritakan momen terbaik Anda sebelum melanjutkan.');
    }
});