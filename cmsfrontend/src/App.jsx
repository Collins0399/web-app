import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MemberRegistration from './MemberRegistration';
import MemberList from './MemberList';
import './App.css';

const App = () => {
  const [members, setMembers] = useState([]);
  const [editingMember, setEditingMember] = useState(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('http://localhost:9001/api/members');
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members', error);
    }
  };

  const handleEdit = (member) => {
    setEditingMember(member);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9001/api/members/${id}`);
      fetchMembers();
    } catch (error) {
      console.error('Error deleting member', error);
    }
  };

  const handleFormSubmit = async (data, isEdit) => {
    try {
      if (isEdit) {
        await axios.put(`http://localhost:9001/api/members/${data.id}`, data);
        alert('Member updated successfully!');
      } else {
        await axios.post('http://localhost:9001/api/members', data);
        alert('Member registered successfully!');
      }

      setEditingMember(null);
      fetchMembers();
    } catch (error) {
      alert('Error saving member');
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Member Registration</h1>
      <MemberRegistration
        onSubmit={handleFormSubmit}
        editingMember={editingMember}
      />
      <MemberList
        members={members}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
