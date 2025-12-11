import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      alert(result.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Try again later.");
    }
  };

  return (
    <div className="contact-page">

      {/* Header */}
      <div className="contact-header">
        <h1>You Can Reach Us Today</h1>
        <p>
          At GyaanMate, we help students reach their full potential with smart,
          personalized, and interactive learning solutions.
        </p>
      </div>

      {/* Cards Section */}
      <section className="contact-cards-section">
        <div className="cards-header">
          <div>
            <p className="small-text">You can get us</p>
            <h2>Get in Touch & Connect with Us Today</h2>
          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
            alt="contact"
            className="header-image"
          />
        </div>

        <div className="contact-cards">
          <div className="card">
            <h3>Looking For us?</h3>
            <p>BD-404, Sector 1, Salt Lake City, Kolkata, India. 700064</p>
          </div>

          <div className="card">
            <h3>Call us</h3>
            <p>033 4600 5845</p>
          </div>

          <div className="card">
            <h3>Email us</h3>
            <p>hr@techmonastic.com</p>
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="map-form-section">
        <div className="map-block">
          <h3>Office location:</h3>
          <iframe
            title="GyaanMate Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.002803920504!2d88.42448077535088!3d22.58022833268079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02758d81d19fc5%3A0x1e5583b92aa0e29b!2sSalt%20Lake%20Sector-1%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1707800000000!5m2!1sen!2sin"
            className="map"
          ></iframe>
        </div>

        <div className="form-block">
          <h3>Send Messages</h3>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
