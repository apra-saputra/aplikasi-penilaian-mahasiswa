import "./styles/app.css";
import CardMahasiswa from "./components/CardMahasiswa";
import { useState } from "react";

function App() {
  const initialForm = {
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  };

  const [mahasiswaCount, setMahasiswaCount] = useState(10);
  const [formAspekNilai, setFormAspekNilai] = useState(initialForm);

  const handleInputChange = (aspek, mahasiswa, value) => {
    setFormAspekNilai((prev) => ({
      ...prev,
      [aspek]: {
        ...prev[aspek],
        [mahasiswa]: value,
      },
    }));
  };

  const saveScore = (e) => {
    e.preventDefault();

    console.log(formAspekNilai);
  };

  const handleReset = () => {
    setFormAspekNilai(initialForm);
  };

  return (
    <div className="App">
      <header>
        <h1>Aplikasi Penilaian Dosen</h1>
      </header>
      <section className="content">
        <form onSubmit={saveScore} >
          {[...Array(mahasiswaCount)].map((_, index) => {
            return (
              <CardMahasiswa
                key={index}
                id={index}
                formAspekNilai={formAspekNilai}
                setFormAspekNilai={setFormAspekNilai}
                handleInput={handleInputChange}
                aspekPenilaian={Object.keys(formAspekNilai).length}
              />
            );
          })}
          <div className="form-btn-section">
            <button type="submit">Simpan</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
