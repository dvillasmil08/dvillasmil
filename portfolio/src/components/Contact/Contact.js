import React, { useState } from 'react';

const ContactModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleClearForm = () => {
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const handleSendEmail = () => {
    // Here, you can implement the logic to send the email using a library or an API

    // After sending the email, you can clear the form
    handleClearForm();
    // You can also close the modal automatically if desired
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Contact</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Contact Form</h2>
            <form>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </form>
            <div className="modal-buttons">
              <button onClick={handleSendEmail}>Send</button>
              <button onClick={handleCloseModal}>Close</button>
              <button onClick={handleClearForm}>Clear</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;
