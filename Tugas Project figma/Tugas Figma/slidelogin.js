document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Mencegah form melakukan pengiriman default
    event.preventDefault(); 

    // Mengambil nilai dari kolom input
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;

    // Logika validasi dan pemrosesan sederhana
    if (name && id) {
        alert(`Halo, ${name}! ID Anda: ${id}. Proses login berhasil (simulasi).`);
        // Di sini Anda akan menambahkan kode untuk mengirim data ke server
    } else {
        alert('Mohon lengkapi Nama dan ID Anda untuk melanjutkan.');
    }
});