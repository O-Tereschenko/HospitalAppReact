import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor, setCartCount }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem('doctor_' + doctor.id);
    if (savedCount) {
      setCount(Number(savedCount));
    }
  }, [doctor.id]);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('doctor_' + doctor.id, newCount);

    const savedCart = localStorage.getItem('cartCount');
    const cart = savedCart ? Number(savedCart) : 0;
    const newCart = cart + 1;

    localStorage.setItem('cartCount', newCart);
    setCartCount(newCart);
  };

  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} />

      <h3>{doctor.name}</h3>
      <p>Спеціалізація: {doctor.specialty}</p>
      <p>Вартість прийому: {doctor.price} грн</p>

      <div className="btn-group">
      <button className="buy-btn" onClick={handleAdd}>
        Записатись
      </button>

    <Link to={`/doctor/${doctor.id}`}>
    <button className="buy-btn">
      Детальніше
    </button>
  </Link>
</div>

<p className="counter">Кількість записів: {count}</p>
    </div>
  );
}

export default DoctorCard;