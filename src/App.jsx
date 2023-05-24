import React, { useState } from 'react';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://www.example.com?ref=stockradars&email=${encodeURIComponent(
      email
    )}&firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(
      lastName
    )}&telephone=${encodeURIComponent(telephone)}`;
    window.location.href = url;
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleTelephoneChange = (e) => {
    setTelephone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} required />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} required />

      <label htmlFor="telephone">Telephone:</label>
      <input type="tel" id="telephone" value={telephone} onChange={handleTelephoneChange} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} required />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
