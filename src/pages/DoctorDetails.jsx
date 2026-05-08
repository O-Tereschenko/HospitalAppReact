import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function DoctorDetails({ setCartCount }) {
  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/doctors/${id}`)
      .then((response) => {
        setDoctor(response.data);
      });

    const saved = localStorage.getItem("doctor_" + id);

    if (saved) {
      setCount(Number(saved));
    }
  }, [id]);

  const handleAdd = () => {
    const newCount = count + 1;

    setCount(newCount);

    localStorage.setItem("doctor_" + id, newCount);

    const savedCart = localStorage.getItem("cartCount");

    const cart = savedCart ? Number(savedCart) : 0;

    const newCart = cart + 1;

    localStorage.setItem("cartCount", newCart);

    setCartCount(newCart);
  };

  if (!doctor) {
    return <h2>Завантаження...</h2>;
  }

  return (
    <main className="main">
      <div className="container">

        <h1>{doctor.name}</h1>

        <img
          src={doctor.image}
          alt={doctor.name}
          style={{
            width: "300px",
            borderRadius: "10px"
          }}
        />

        <p>
          <b>Спеціалізація:</b> {doctor.specialty}
        </p>

        <p>
          <b>Вартість:</b> {doctor.price} грн
        </p>

        <p>
          Професійний спеціаліст з великим досвідом роботи.
        </p>

        <p>
          <b>Кількість записів:</b> {count}
        </p>

        <div className="btn-group">

          <button
            className="buy-btn"
            onClick={handleAdd}
          >
            Записатись
          </button>

          <Link to="/catalog">
            <button className="buy-btn">
              Назад
            </button>
          </Link>

        </div>

      </div>
    </main>
  );
}

export default DoctorDetails;