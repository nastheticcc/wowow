import prestasi1 from "../assets/prestasi1.jpg";
import prestasi2 from "../assets/prestasi2.jpg";
import prestasi3 from "../assets/prestasi3.jpg";
import prestasi4 from "../assets/prestasi4.jpg";
import prestasi5 from "../assets/prestasi5.jpg";
import prestasi6 from "../assets/prestasi6.jpg";
import prestasi7 from "../assets/prestasi7.jpg";
import prestasi8 from "../assets/prestasi8.jpg";
import prestasi9 from "../assets/prestasi9.jpg";

function Achievement() {
  const prestasi = [
    { src: prestasi1, title: "Prestasi 1", desc: "Juara 1 Lomba Hafalan Surat Pendek - 2015"  },
    { src: prestasi2, title: "Prestasi 2", desc: "Juara Harapan II Lomba Mewarnai - 2015" },
    { src: prestasi3, title: "Prestasi 3", desc: "Piagam Penghargaan Mengkhatamkan Al Qur'an - 2021"  },
    { src: prestasi4, title: "Prestasi 4", desc: "Juara 3 Munaqasyah Tartil - 2019"  },
    { src: prestasi5, title: "Prestasi 5", desc: "Juara 2 Munaqasyah Tahfidz Juz 30 - 2021"  },
    { src: prestasi6, title: "Prestasi 6", desc: "Juara 2 Munaqasyah Tahfidz Juz 29 - 2023"  },
    { src: prestasi7, title: "Prestasi 7", desc: "Syahadah Tahfidz - 2023"  },
    { src: prestasi8, title: "Prestasi 8", desc: "Juara 1 Lomba MHQ Tahfidz online - 2025"  },
    { src: prestasi9, title: "Prestasi 9", desc: "Juara 3 Lomba MHQ Tahfidz online - 2025"  },

  ];

  return (
    <div className="page achievement">
      <h1>My Achievements</h1>
      <div className="achievement-gallery">
        {prestasi.map((item, index) => (
          <div key={index} className="achievement-card">
            <img src={item.src} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievement;
