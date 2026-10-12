const STORAGE_KEY = "web-tasks-v1";

function AplikasiDaftarTugas() {
  const [tasks, setTasks] = React.useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [inputTitle, setInputTitle] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeFilter, setActiveFilter] = React.useState("all");

  const [editingId, setEditingId] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleTambah = (e) => {
    e.preventDefault();
    if (inputTitle.trim().length < 3) {
      setErrorMsg("Nama tugas minimal 3 karakter.");
      return;
    }

    setErrorMsg("");
    const tugasBaru = {
      id: crypto.randomUUID(),
      title: inputTitle.trim(),
      completed: false,
    };

    setTasks([...tasks, tugasBaru]);
    setInputTitle("");
  };

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleHapus = (id, title) => {
    if (confirm(`Apakah Anda yakin ingin menghapus "${title}"?`)) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const handleMulaiEdit = (task) => {
    setEditingId(task.id);
    setEditingText(task.title);
  };

  const handleSimpanEdit = (id) => {
    if (editingText.trim().length < 3) {
      alert("Judul tugas minimal 3 karakter!");
      return;
    }

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: editingText.trim() } : task,
      ),
    );
    setEditingId(null);
    setEditingText("");
  };

  const handleBatalEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      activeFilter === "all"
        ? true
        : activeFilter === "active"
          ? !task.completed
          : task.completed;

    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container">
      <section className="card">
        <form onSubmit={handleTambah} noValidate>
          <div className="form-group">
            <label htmlFor="task-input">Nama Tugas</label>
            <input
              id="task-input"
              type="text"
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
              placeholder="Masukkan judul tugas..."
            />
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
          </div>
          <button type="submit">Tambah Tugas</button>
        </form>
      </section>

      <section className="card">
        <div className="form-group">
          <label htmlFor="search-input">Cari Tugas</label>
          <input
            id="search-input"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ketik kata kunci..."
          />
        </div>

        <div style={{ display: "flex", gap: "8px", marginBottom: "15px" }}>
          <button
            type="button"
            className={activeFilter === "all" ? "" : "secondary"}
            onClick={() => setActiveFilter("all")}
          >
            Semua
          </button>
          <button
            type="button"
            className={activeFilter === "active" ? "" : "secondary"}
            onClick={() => setActiveFilter("active")}
          >
            Aktif
          </button>
          <button
            type="button"
            className={activeFilter === "completed" ? "" : "secondary"}
            onClick={() => setActiveFilter("completed")}
          >
            Selesai
          </button>
        </div>

        {filteredTasks.length === 0 ? (
          <p style={{ textAlign: "center", color: "#777" }}>Belum ada tugas.</p>
        ) : (
          <ul>
            {filteredTasks.map((task) => (
              <li key={task.id} className={task.completed ? "completed" : ""}>
                {editingId === task.id ? (
                  <div style={{ display: "flex", gap: "8px", width: "100%" }}>
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => handleSimpanEdit(task.id)}
                    >
                      Simpan
                    </button>
                    <button
                      type="button"
                      className="secondary"
                      onClick={handleBatalEdit}
                    >
                      Batal
                    </button>
                  </div>
                ) : (
                  <>
                    <span>{task.title}</span>
                    <div className="item-actions">
                      <button
                        type="button"
                        className="secondary"
                        onClick={() => handleToggle(task.id)}
                      >
                        {task.completed ? "Batal" : "Selesai"}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleMulaiEdit(task)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="danger"
                        onClick={() => handleHapus(task.id, task.title)}
                      >
                        Hapus
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AplikasiDaftarTugas />);
