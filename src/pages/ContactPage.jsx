import { useState } from "react";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email.includes("@")) {
      newErrors.email = "Email має містити '@'";
    }

    if (message.length < 10) {
      newErrors.message = "Повідомлення має бути не менше 10 символів";
    }

    if (name.trim() === "") {
      newErrors.name = "Ім'я не може бути пустим";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Форма успішно відправлена!");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <main className="main">
      <div className="container">
        <h1>Контакти</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          
          <div>
            <label>Ім'я:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div>
            <label>Повідомлення:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit" className="buy-btn">
            Відправити
          </button>
        </form>
      </div>
    </main>
  );
}

export default ContactPage;