import React from 'react';

const MemberList = ({ members, onEdit, onDelete }) => {
  return (
    <div className="member-list">
      <h2>Member List</h2>
      {members.length === 0 ? (
        <p>No members registered yet.</p>
      ) : (
        <ul>
          {members.map((member) => (
            <li key={member.id} className="member-item">
              <div>
                <strong>{member.fullName}</strong><br />
                <small>Email:</small> {member.email}<br />
                <small>Phone:</small> {member.phone}<br />
                <small>DOB:</small> {member.DOB}<br />
                <small>Address:</small> {member.Address}<br />
                <small>Date Joined:</small> {member.dateJoined}
              </div>
              <div className="member-actions">
                <button className="edit-btn" onClick={() => onEdit(member)}>Edit</button>
                <button className="delete-btn" onClick={() => onDelete(member.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MemberList;
