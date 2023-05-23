import image from "../assets/images/profile-icon-png-898.png";

const CardMahasiswa = ({
  id,
  formAspekNilai,
  handleInput,
  aspekPenilaian = 4,
}) => {
  const defaultValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="card">
      <img src={image} alt="avatar" className="card__avatar" />
      <h4 style={{ marginInline: "12px" }}>Mahasiswa {Number(id) + 1}</h4>
      {[...Array(aspekPenilaian)].map((_, index) => {
        return (
          <div className="card__score" key={index}>
            <label>penilaian {index + 1}</label>
            <select
              name="mahasiswa score"
              value={
                formAspekNilai[`aspek_penilaian_${index + 1}`][
                  `mahasiswa_${id + 1}`
                ] || ""
              }
              onChange={(e) =>
                handleInput(
                  `aspek_penilaian_${index + 1}`,
                  `mahasiswa_${id + 1}`,
                  parseInt(e.target.value)
                )
              }
              className="card__score__select"
            >
              <option value={null}>pilih nilai</option>
              {defaultValue.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        );
      })}
    </div>
  );
};

export default CardMahasiswa;
