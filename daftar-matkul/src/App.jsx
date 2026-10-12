import "./App.css";

function KartuMatkul(props) {
  return (
    <div className="matkul-card">
      <h3>{props.namaMatkul}</h3>
      <p>
        Kode: <strong>{props.kode}</strong>
      </p>
      <p>
        SKS: <strong>{props.sks}</strong>
      </p>
    </div>
  );
}

export default function App() {
  const daftarMatkul = [
    { id: "mk-1", kode: "PROG31W", nama: "Pemrograman Web", sks: 3 },
    { id: "mk-2", kode: "MATS21W", nama: "Probabilitas Lanjut", sks: 2 },
    { id: "mk-3", kode: "MATS32W", nama: "Aljabar Linear", sks: 2 },
    { id: "mk-4", kode: "DAIS31W", nama: "Manajemen Data", sks: 3 },
  ];

  return (
    <div className="container">
      <header>
        <h1>Mata Kuliah</h1>
      </header>

      <section className="card">
        <h2>Daftar Mata Kuliah</h2>
        {daftarMatkul.map((matkul) => (
          <KartuMatkul
            key={matkul.id}
            kode={matkul.kode}
            namaMatkul={matkul.nama}
            sks={matkul.sks}
          />
        ))}
      </section>
    </div>
  );
}
