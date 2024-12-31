<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'] ?? null;
    $nama = $_POST['nama'];
    $tahun_lulus = $_POST['tahun_lulus'];
    $pekerjaan = $_POST['pekerjaan'];

    if ($id) {
        // Update data
        $stmt = $conn->prepare("UPDATE alumni SET nama=?, tahun_lulus=?, pekerjaan=? WHERE id=?");
        $stmt->bind_param("sssi", $nama, $tahun_lulus, $pekerjaan, $id);
    } else {
        // Tambah data
        $stmt = $conn->prepare("INSERT INTO alumni (nama, tahun_lulus, pekerjaan) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $nama, $tahun_lulus, $pekerjaan);
    }
    $stmt->execute();
    echo json_encode(['success' => true]);
} elseif ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Ambil data
    $result = $conn->query("SELECT * FROM alumni");
    $data = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data);
} elseif ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    parse_str(file_get_contents("php://input"), $input);
    $id = $input['id'];
    $stmt = $conn->prepare("DELETE FROM alumni WHERE id=?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    echo json_encode(['success' => true]);
}
?>