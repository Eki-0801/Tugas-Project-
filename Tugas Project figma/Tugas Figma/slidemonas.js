function goBack() {
    alert('Simulasi: Kembali ke pertanyaan sebelumnya.');
    // Contoh: window.history.back();
}

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const answer = document.getElementById('reviewAnswer').value;

    if (answer.trim() !== '') {
        const shortAnswer = answer.length > 30 ? answer.substring(0, 30) + '...' : answer;
        alert(`Ulasan tersimpan: "${shortAnswer}". Melanjutkan ke tempat berikutnya.`);
        // Contoh: window.location.href = 'review_kota_tua.html';
    } else {
        alert('Mohon tuliskan ulasan Anda sebelum melanjutkan.');
    }
});