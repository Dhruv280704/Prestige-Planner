import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://prestige-planner.onrender.com/api/v1/message/send",
        {
          name,
          email,
          subject,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>India, New Delhi, 110043</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +91-9876543210</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>info@prestigeplanner.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.22648503997!2d77.06889907773693!3d28.52728034372088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce36ecf2ff2b5%3A0x2fc1e5d84e98e5d2!2sDelhi!5e0!3m2!1sen!2sin!4v1716277972341!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: "0" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade">
</iframe>
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;