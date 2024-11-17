document.addEventListener("DOMContentLoaded", () => {
    // Data alumni
    const alumniData = [
      {
        name: "Amar Khairan Pradana",
        major: "Teknik Informatika",
        graduationYear: 2015,
        career: "Full Stack Developer di TRAVLR Indonesia"
      },
      {
        name: "Kanza Shabil Ardhani",
        major: "Sistem Informasi",
        graduationYear: 2018,
        career: " System Analyst - IT Consultant di Elitez Pte Ltd"
      },
      {
        name: "Adhitama Hadrian",
        major: "Teknik Sipil",
        graduationYear: 2018,
        career: " Civil Engineer di Shimizu Corporation"
      },
      {
        name: "Arroyan Alfarizqi",
        major: "Desain Komunikasi Visual",
        graduationYear: 2018,
        career: "Art Director di Olaif"
      },
      {
        name: "Ashana Nabiha Taleetha",
        major: "Manajemen Informatika",
        graduationYear: 2018,
        career: "Arsitek Jaringan Komputer"
      }
    ];
  
    // Fungsi untuk menampilkan alumni
    const displayAlumni = (filteredData) => {
      const successStories = document.getElementById("success-stories");
      successStories.innerHTML = "<h2>Karir Alumni Universitas Kuningan</h2>"; // Reset konten
  
      filteredData.forEach((alumni) => {
        const alumniCard = document.createElement("div");
        alumniCard.classList.add("alumni-card");
        alumniCard.innerHTML = `
          <h3>Nama: ${alumni.name}</h3>
          <p>Jurusan: ${alumni.major}</p>
          <p>Tahun Kelulusan: ${alumni.graduationYear}</p>
          <p>Karir: ${alumni.career}</p>
        `;
        successStories.appendChild(alumniCard);
      });
    };
  
    // Tampilkan semua alumni saat halaman dimuat
    displayAlumni(alumniData);
  
    // Event listener untuk pencarian
    const searchBox = document.getElementById("search-box");
    searchBox.addEventListener("input", () => {
      const searchTerm = searchBox.value.toLowerCase();
      const filteredAlumni = alumniData.filter(
        (alumni) =>
          alumni.name.toLowerCase().includes(searchTerm) ||
          alumni.major.toLowerCase().includes(searchTerm)
      );
      displayAlumni(filteredAlumni);
    });
  });  