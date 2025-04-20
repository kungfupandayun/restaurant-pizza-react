import { useState } from "react";
import "./Reservation.css";

const Reservation = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    pax: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.pax > 20) {
      alert("For reservations of more than 20 people, please call us directly.");
    } else {
      try {
        const backendData = {
          date: formData.date,
          time: formData.time,
          numberOfPax: formData.pax,
          name: formData.name,
          phoneNumber: formData.phone,
        };

        const response = await fetch(
          "https://localhost:7142/PizzaRestaurant/reservation",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(backendData),
          }
        );

        if (response.ok) {
          alert("Reservation submitted successfully!");
          setFormData({ date: "", time: "", pax: "", name: "", phone: "" });
        } else {
          alert("Failed to submit reservation.");
        }
      } catch (error) {
        console.error("Error submitting reservation:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="reservation-container bg-gray-900">
      <div className="reservation-box">
        <h1 className="reservation-title">Table Reservation</h1>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="reservation-form-group">
            <label className="reservation-label">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="reservation-input"
              min={new Date().toISOString().split("T")[0]} // Disable past dates
            />
          </div>
          <div className="reservation-form-group">
            <label className="reservation-label">Time:</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="reservation-input"
              min={
                formData.date === new Date().toISOString().split("T")[0]
                  ? new Date().toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : undefined
              } // Disable time before now if date is today
            />
          </div>
          <div className="reservation-form-group">
            <label className="reservation-label">Number of Pax:</label>
            <input
              type="number"
              name="pax"
              value={formData.pax}
              onChange={handleChange}
              required
              min="1"
              className="reservation-input"
            />
          </div>
          <div className="reservation-form-group">
            <label className="reservation-label">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="reservation-input"
            />
          </div>
          <div className="reservation-form-group">
            <label className="reservation-label">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="reservation-input"
            />
          </div>
          <p className="reservation-warning">
            * For reservations of more than 20 people, please call us directly.
          </p>
          <button type="submit" className="reservation-button">
            Submit Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
