import React, { useState, useEffect } from 'react';

const MemberRegistration = ({ onSubmit, editingMember }) => {
  const [formData, setFormData] = useState({
    id: '',
    fullName: '',
    email: '',
    phone: '',
    DOB: '',
    Address: '',
    dateJoined: ''
  });

  useEffect(() => {
    if (editingMember) {
      setFormData(editingMember);
    } else {
      setFormData({
        id: '',
        fullName: '',
        email: '',
        phone: '',
        DOB: '',
        Address: '',
        dateJoined: ''
      });
    }
  }, [editingMember]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, !!editingMember);
  };

  return (
    <div className="registration-form">
      <h2>{editingMember ? 'Edit Member' : 'Register New Member'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          name="DOB"
          value={formData.DOB}
          onChange={handleChange}
          required
        />

        <label>Address:</label>
        <input
          type="text"
          name="Address"
          value={formData.Address}
          onChange={handleChange}
        />

        <label>Date Joined:</label>
        <input
          type="date"
          name="dateJoined"
          value={formData.dateJoined}
          onChange={handleChange}
          required
        />

        <button type="submit">{editingMember ? 'Update Member' : 'Register'}</button>
      </form>
    </div>
  );
};

export default MemberRegistration;
