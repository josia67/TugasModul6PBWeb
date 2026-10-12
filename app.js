function KartuProfil(props) {
  return (
    <section className="card">
      <h2>Profil Utama</h2>
      <div style={{ textAlign: "center", marginBottom: "15px" }}>
        <img
          src="foto.jpeg"
          alt={props.nama}
          width="150"
          style={{ borderRadius: "8px" }}
        />
      </div>
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
    </section>
  );
}

function DetailInformasi(props) {
  return (
    <section className="card">
      <h2>Tentang & Keterampilan</h2>
      <p>{props.bio}</p>
      <blockquote
        style={{ fontStyle: "italic", margin: "10px 0", color: "#555" }}
      >
        "{props.kutipan}"
      </blockquote>

      <h3>Keterampilan Teknis</h3>
      <ul>
        {props.keterampilan.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function App() {
  const namaMhs = "Josia Ananda Sianturi";
  const nimMhs = "255314088";
  const prodiMhs = "Informatika";
  const institusiMhs = "Universitas Sanata Dharma";
  const bioMhs =
    "Mahasiswa Informatika yang tertarik pada pengembangan web, struktur data, dan algoritma.";
  const kutipanMhs =
    "Belajar paling kuat terjadi ketika konsep langsung dipraktikkan.";
  const keterampilanMhs = [
    "HTML5, CSS, & JavaScript",
    "Pemrograman Java & Python",
    "Git, GitHub, & VS Code",
  ];

  return (
    <div className="container">
      <KartuProfil
        nama={namaMhs}
        nim={nimMhs}
        prodi={prodiMhs}
        institusi={institusiMhs}
      />
      <DetailInformasi
        bio={bioMhs}
        kutipan={kutipanMhs}
        keterampilan={keterampilanMhs}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
