import { useEffect, useState } from "react";
import axios from "axios";

import PromoBanner from "../components/PromoBanner";
import DoctorCard from "../components/DoctorCard";

function CatalogPage({ setCartCount }) {
  const [doctors, setDoctors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Всі");

  const categories = [
    "Всі",
    "Кардіолог",
    "Терапевт",
    "Хірург"
  ];

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/doctors`)
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredDoctors =
    selectedCategory === "Всі"
      ? doctors
      : doctors.filter(
          (doctor) => doctor.specialty === selectedCategory
        );

  return (
    <main className="main">
      <div className="container">

        <PromoBanner />

        <h1>Каталог лікарів</h1>
        <p>Оберіть спеціаліста та виконайте запис на прийом.</p>

        <div className="categories">
          {categories.map((category, index) => (
            <button
              key={index}
              className="buy-btn"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="doctor-list">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              setCartCount={setCartCount}
            />
          ))}
        </div>

      </div>
    </main>
  );
}

export default CatalogPage;