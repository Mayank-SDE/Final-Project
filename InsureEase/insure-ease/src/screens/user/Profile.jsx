import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Navbar';

const Profile = () => {
  // Hardcoded user data
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 234 567 890',
    address: '123 Main Street, Springfield, USA',
    dateOfBirth: '1990-01-01',
    policies: [
      { id: 1, name: 'Health Insurance Plan A', status: 'Active' },
      { id: 2, name: 'Car Insurance Plan B', status: 'Expired' },
    ],
  };

  return (
    <>
      <Navbar isLoggedIn={true} userRole={"user"} />
    <div className="container my-5">
      <h1 className="text-center display-5 mb-4">My Profile</h1>
      <div className="card shadow-lg border-0">
        <div className="card-body">
          <h2 className="card-title text-primary mb-4">Personal Information</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Date of Birth:</strong> {user.dateOfBirth}</p>

          <h3 className="text-secondary mt-4">Policies</h3>
          <ul className="list-group mt-2">
            {user.policies.map((policy) => (
              <li
                key={policy.id}
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  policy.status === 'Active' ? 'list-group-item-success' : 'list-group-item-danger'
                }`}
              >
                {policy.name}
                <span className="badge bg-primary rounded-pill">{policy.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
