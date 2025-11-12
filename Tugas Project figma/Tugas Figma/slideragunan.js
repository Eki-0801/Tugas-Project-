function goBack() {
    alert('Simulasi: Kembali ke ulasan sebelumnya.');
    // Contoh nyata: window.history.back();
}

document.getElementById('reviewFormRagunan').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const answer = document.getElementById('reviewAnswerRagunan').value;

    if (answer.trim() !== '') {
        const shortAnswer = answer.length > 30 ? answer.substring(0, 30) + '...' : answer;
        alert(`Ulasan tersimpan: "${shortAnswer}". Survei Selesai!`);
        // Di sini Anda akan mengarahkan ke halaman penutup survei
        // window.location.href = 'thank_you.html';
    } else {
        alert('Mohon tuliskan ulasan Anda sebelum melanjutkan.');
    }
});