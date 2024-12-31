<?php include 'db.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tracer Alumni</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <h1>Tracer Alumni</h1>
    <form id="alumniForm">
        <input type="hidden" name="id" id="id">
        <input type="text" name="nama" id="nama" placeholder="Nama" required>
        <input type="number" name="tahun_lulus" id="tahun_lulus" placeholder="Tahun Lulus" required>
        <input type="text" name="pekerjaan" id="pekerjaan" placeholder="Pekerjaan" required>
        <button type="submit">Simpan</button>
    </form>
    <h2>Daftar Alumni</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Nama</th>
                <th>Tahun Lulus</th>
                <th>Pekerjaan</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody id="alumniList"></tbody>
    </table>

    <script src="assets/js/script.js"></script>
</body>
</html>