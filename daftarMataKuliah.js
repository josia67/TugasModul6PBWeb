function KartuMatkul(props) {
  return (
    <div className="card" style={{ marginBottom: "12px" }}>
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

function App() {
  const daftarMatkul = [
    { id: "mk-101", kode: "PROG31W", nama: "Pemrograman Web", sks: 3 },
    { id: "mk-102", kode: "MATS21W", nama: "Probabilitas Lanjut", sks: 2 },
    { id: "mk-103", kode: "MATS32W", nama: "Aljabar Linear", sks: 2 },
    { id: "mk-104", kode: "DAIS31W", nama: "Manajemen Data", sks: 3 },
  ];

  return (
    <div className="container">
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
