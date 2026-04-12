import { useState } from "react";

function DoctorCard({ doctor }) {
  const [count, setCount] = useState(0);

  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} />

      <h3>{doctor.name}</h3>
      <p>Спеціалізація: {doctor.specialty}</p>
      <p>Вартість прийому: {doctor.price} грн</p>

      <button
        className="buy-btn"
        onClick={() => setCount(count + 1)}
      >
        Записатись
      </button>

      <p className="counter">Кількість записів: {count}</p>
    </div>
  );
}

export default DoctorCard;