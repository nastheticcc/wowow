import profilePic from "../assets/aku1.jpg";

function About() {
  return (
    <div className="page about">
      <h1>About Me</h1>
      <div className="about-content">
        <img src={profilePic} alt="Foto Profil" className="profile-pic" />
        <table className="about-table">
          <tbody>
            <tr><td>Nama:</td><td>Naswa Ayu Cahya Kirana</td></tr>
            <tr><td>Kelas:</td><td>XI RPL A</td></tr>
            <tr><td>Sekolah:</td><td>SMKN 8 MALANG</td></tr>
            <tr><td>Tempat, Tanggal Lahir:</td><td>Malang, 21 Februari 2009</td></tr>
            <tr><td>Jenis Kelamin:</td><td>Perempuan</td></tr>
            <tr><td>Hobi:</td><td>Membaca AU, Musik</td></tr>
          </tbody>
        </table>
      </div>

      <div className="skills">
        <span className="skill">C#</span>
        <span className="skill">Java</span>
        <span className="skill">HTML</span>
        <span className="skill">JavaScript</span>
        <span className="skill">Git</span>
        <span className="skill">React</span>
        <span className="skill">Vite</span>
        <span className="skill">Flowgorithm</span>
        <span className="skill">Flutter</span>        
      </div>
    </div>
  );
}

export default About;
