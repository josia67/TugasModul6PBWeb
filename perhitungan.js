function PenghitungKehadiran() {
  const [kehadiran, setKehadiran] = React.useState(0);

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
      <section className="card card-result">
        <h3>Penghitung Kehadiran</h3>
        <div className="summary-box">
          <div className="summary-item">
            <h4>Total Kehadiran</h4>
            <p>{kehadiran} / 30</p>
          </div>
        </div>

        {kehadiran === 30 && (
          <p className="error-msg" style={{ textAlign: "center" }}>
            Batas maksimum (30) tercapai!
          </p>
        )}
        {kehadiran === 0 && (
          <p
            style={{ textAlign: "center", color: "#6c757d", fontSize: "13px" }}
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PenghitungKehadiran />);
