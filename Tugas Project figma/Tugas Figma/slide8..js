// Fungsi untuk tombol "Back"
function goBack() {
    alert('Simulasi: Kembali ke halaman/pertanyaan sebelumnya.');
    // Contoh nyata: window.history.back();
}

// Logika untuk menangani pilihan tombol
document.querySelectorAll('.choice-button').forEach(button => {
    button.addEventListener('click', function() {
        // Hilangkan kelas 'selected' dari semua tombol
        document.querySelectorAll('.choice-button').forEach(btn => {
            btn.classList.remove('selected');
        });

        // Tambahkan kelas 'selected' ke tombol yang baru diklik
        this.classList.add('selected');
        
        const selectedValue = this.getAttribute('data-value');
        
        alert(`Anda memilih: ${selectedValue}. Melanjutkan ke pertanyaan berikutnya...`);
        // Di sini Anda akan mengirim data ke server
        // Contoh nyata: window.location.href = 'next_question.html';
    });
});