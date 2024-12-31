$(document).ready(function () {
    loadAlumni();

    // Tambah atau update data
    $("#alumniForm").submit(function (e) {
        e.preventDefault();
        const formData = $(this).serialize();
        $.post('process.php', formData, function (response) {
            alert("Data berhasil disimpan!");
            $("#alumniForm")[0].reset();
            loadAlumni();
        }, "json");
    });

    // Load data alumni
    function loadAlumni() {
        $.get('process.php', function (data) {
            const alumni = JSON.parse(data);
            let rows = '';
            alumni.forEach(function (item) {
                rows += `
                    <tr>
                        <td>${item.nama}</td>
                        <td>${item.tahun_lulus}</td>
                        <td>${item.pekerjaan}</td>
                        <td>
                            <button onclick="editAlumni(${item.id}, '${item.nama}', '${item.tahun_lulus}', '${item.pekerjaan}')">Edit</button>
                            <button onclick="deleteAlumni(${item.id})">Hapus</button>
                        </td>
                    </tr>
                `;
            });
            $("#alumniList").html(rows);
        });
    }

    // Edit data
    window.editAlumni = function (id, nama, tahun, pekerjaan) {
        $("#id").val(id);
        $("#nama").val(nama);
        $("#tahun_lulus").val(tahun);
        $("#pekerjaan").val(pekerjaan);
    };

    // Hapus data
    window.deleteAlumni = function (id) {
        if (confirm("Yakin ingin menghapus data ini?")) {
            $.ajax({
                url: 'process.php',
                method: 'DELETE',
                data: { id: id },
                success: function (response) {
                    alert("Data berhasil dihapus!");
                    loadAlumni();
                }
            });
        }
    };
});