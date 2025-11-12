document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;

    if (name && id) {
        alert(`Selamat datang, ${name}! Melanjutkan ke halaman survei.`);
        // Contoh nyata: window.location.href = 'survey_intro.html';
    } else {
        alert('Mohon lengkapi Nama dan ID Anda.');
    }
});