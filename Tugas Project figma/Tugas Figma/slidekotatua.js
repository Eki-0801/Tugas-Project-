function goBack() {
    alert('Simulasi: Kembali ke ulasan Monas (atau pertanyaan sebelumnya).');
    // Contoh nyata: window.history.back();
}

document.getElementById('reviewFormKotaTua').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const answer = document.getElementById('reviewAnswerKotaTua').value;

    if (answer.trim() !== '') {
        const shortAnswer = answer.length > 30 ? answer.substring(0, 30) + '...' : answer;
        alert(`Ulasan tersimpan: "${shortAnswer}". Melanjutkan ke halaman Terima Kasih!`);
        // Di sini Anda akan mengarahkan ke halaman penutup survei
        // window.location.href = 'thank_you.html';
    } else {
        alert('Mohon tuliskan ulasan Anda sebelum melanjutkan.');
    }
});