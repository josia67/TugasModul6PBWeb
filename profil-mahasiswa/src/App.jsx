import "./App.css";

function KartuProfil(props) {
  return (
    <section className="card">
      <h2>Profil Mahasiswa</h2>
      <div className="foto-wrap">
        <img src="/assets/foto.jpeg" alt={props.nama} className="foto" />
      </div>
      <div className="data-diri">
        <p>
          <strong>Nama Lengkap:</strong> {props.nama}
        </p>
        <p>
          <strong>NIM:</strong> {props.nim}
        </p>
        <p>
          <strong>Program Studi:</strong> {props.prodi}
        </p>
        <p>
          <strong>Institusi:</strong> {props.institusi}
        </p>
      </div>
    </section>
  );
}

function DetailInformasi(props) {
  return (
    <section className="card">
      <h2>Tentang Saya</h2>
      <p className="bio">
        Saya mahasiswa <strong>{props.prodi}</strong> yang tertarik pada{" "}
        <em>pengembangan web, struktur data, dan algoritma</em>.
      </p>
      <blockquote className="kutipan">"{props.kutipan}"</blockquote>

      <h3>Keterampilan Teknis</h3>
      <ul>
        {props.keterampilanTeknis.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function App() {
  const namaMahasiswa = "Josia Ananda Sianturi";
  const nimMahasiswa = "255314088";
  const prodiMahasiswa = "Informatika";
  const institusiMahasiswa = "Universitas Sanata Dharma";
  const kutipanMahasiswa =
    "Belajar paling kuat terjadi ketika konsep langsung dipraktikkan.";

  const keterampilanTeknis = [
    "HTML5, CSS, & JavaScript",
    "Pemrograman Java & Python",
    "Git, GitHub, & VS Code",
  ];

  return (
    <div className="container">
      <header>
        <h1>Profil Saya</h1>
      </header>
      <KartuProfil
        nama={namaMahasiswa}
        nim={nimMahasiswa}
        prodi={prodiMahasiswa}
        institusi={institusiMahasiswa}
      />
      <DetailInformasi
        prodi={prodiMahasiswa}
        kutipan={kutipanMahasiswa}
        keterampilanTeknis={keterampilanTeknis}
      />
    </div>
  );
}
