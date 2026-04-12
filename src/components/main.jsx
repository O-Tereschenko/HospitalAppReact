import DoctorCard from "./DoctorCard";

function Main() {
  const doctors = [
    {
      id: 1,
      name: "Євпатій Коловрат",
      specialty: "Кардіолог",
      price: 500,
      image: "img/doctor1.jpg"
    },
    {
      id: 2,
      name: "Ілля Муромець",
      specialty: "Терапевт",
      price: 400,
      image: "img/doctor2.jpg"
    },
    {
      id: 3,
      name: "Олександр Патріотович",
      specialty: "Хірург",
      price: 700,
      image: "img/doctor3.png"
    }
  ];

  return (
    <main className="main">
      <div className="container">
        <h1>Каталог лікарів</h1>
        <p>
          Оберіть спеціаліста та виконайте запис на прийом.
        </p>

        <div className="doctor-list">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Main;