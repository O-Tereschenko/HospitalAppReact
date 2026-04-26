import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function DoctorDetails({ setCartCount }) {
  const { id } = useParams();

  const doctors = [
    {
      id: 1,
      name: "Євпатій Коловрат",
      specialty: "Кардіолог",
      price: 500,
      image: "/img/doctor1.jpg",
      description: "Досвідчений кардіолог з багаторічною практикою."
    },
    {
      id: 2,
      name: "Ілля Муромець",
      specialty: "Терапевт",
      price: 400,
      image: "/img/doctor2.jpg",
      description: "Спеціаліст широкого профілю, допоможе у будь-якій ситуації."
    },
    {
      id: 3,
      name: "Олександр Патріотович",
      specialty: "Хірург",
      price: 700,
      image: "/img/doctor3.png",
      description: "Професійний хірург з великим досвідом операцій."
    }
  ];

  const doctor = doctors.find((d) => d.id === Number(id));

  const [count, setCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("doctor_" + id);
    if (saved) setCount(Number(saved));
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
    return <h2>Лікаря не знайдено</h2>;
  }

  return (
    <main className="main">
    <div className="container">
      <h1>{doctor.name}</h1>

      <img
        src={doctor.image}
        alt={doctor.name}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <p><b>Спеціалізація:</b> {doctor.specialty}</p>
      <p><b>Вартість:</b> {doctor.price} грн</p>
      <p>{doctor.description}</p>

      <p><b>Кількість записів:</b> {count}</p>

      <div className="btn-group">
        <button className="buy-btn" onClick={handleAdd}>
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