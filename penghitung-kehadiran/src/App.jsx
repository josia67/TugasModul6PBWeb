import { useState } from "react";
import "./App.css";

export default function App() {
  const [kehadiran, setKehadiran] = useState(0);

  const handleTambah = () => {
    if (kehadiran < 30) {
      setKehadiran(kehadiran + 1);
    }
  };

  const handleKurangi = () => {
    if (kehadiran > 0) {
      setKehadiran(kehadiran - 1);
    }
  };

  const handleReset = () => {
    setKehadiran(0);
  };

  return (
    <div className="container">
      <header>
        <h1>Sistem Kehadiran</h1>
      </header>

      <section className="card">
        <h2>Penghitung Kehadiran</h2>
        <p className="angka-kehadiran">{kehadiran} / 30</p>

        {kehadiran === 30 && (
          <p className="error-msg">Batas maksimum (30) telah tercapai!</p>
        )}
        {kehadiran === 0 && (
          <p
            style={{ color: "#6c757d", fontSize: "13px", marginBottom: "10px" }}
          >
            Batas minimum (0) tercapai.
          </p>
        )}

        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          <button
            type="button"
            onClick={handleTambah}
            disabled={kehadiran === 30}
          >
            Tambah
          </button>
          <button
            type="button"
            className="secondary"
            onClick={handleKurangi}
            disabled={kehadiran === 0}
          >
            Kurangi
          </button>
          <button type="button" className="danger" onClick={handleReset}>
            Reset
          </button>
        </div>
      </section>
    </div>
  );
}
