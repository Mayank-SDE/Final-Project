import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Navbar';

const MyPolicies = () => {
  // State for selected policy
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  // Hardcoded policy data
  const policies = [
    {
      id: 1,
      name: 'Health Insurance',
      type: 'Health',
      status: 'Active',
      startDate: '2023-01-01',
      endDate: '2024-01-01',
      premium: '$120/month',
    },
    {
      id: 2,
      name: 'Car Insurance',
      type: 'Auto',
      status: 'Expired',
      startDate: '2022-01-01',
      endDate: '2023-01-01',
      premium: '$80/month',
    },
    {
      id: 3,
      name: 'Life Insurance',
      type: 'Life',
      status: 'Active',
      startDate: '2021-06-15',
      endDate: '2026-06-15',
      premium: '$150/month',
    },
  ];

  const handleSelectPolicy = (policy) => {
    setSelectedPolicy(policy);
  };

  const handleBackToList = () => {
    setSelectedPolicy(null);
  };

  return (
    <>  
    <Navbar isLoggedIn={true} userRole={"user"} />
      <div className="container my-5">
      <h1 className="text-center display-4 mb-5">My Insurance Policies</h1>
      {!selectedPolicy ? (
        <div className="row g-4">
          {policies.map((policy) => (
            <div key={policy.id} className="col-lg-4 col-md-6">
              <div
                className="card h-100 shadow-sm border-0"
                onClick={() => handleSelectPolicy(policy)}
                style={{ cursor: 'pointer', transition: 'transform 0.3s' }}
              >
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold mb-3 text-primary">{policy.name}</h5>
                  <p className="card-text mb-2 text-muted">Type: {policy.type}</p>
                  <p className="card-text mb-2">
                    <span className={`badge ${policy.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>{policy.status}</span>
                  </p>
                  <p className="card-text text-secondary">Premium: {policy.premium}</p>
                </div>
                <div className="card-footer bg-light border-0 text-center">
                  <button className="btn btn-outline-primary btn-sm">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card shadow-lg border-0">
          <div className="card-header bg-primary text-white text-center">
            <h2 className="mb-0">{selectedPolicy.name}</h2>
          </div>
          <div className="card-body">
            <p><strong>Type:</strong> {selectedPolicy.type}</p>
            <p><strong>Status:</strong> {selectedPolicy.status}</p>
            <p><strong>Start Date:</strong> {selectedPolicy.startDate}</p>
            <p><strong>End Date:</strong> {selectedPolicy.endDate}</p>
            <p><strong>Premium:</strong> {selectedPolicy.premium}</p>
          </div>
          <div className="card-footer bg-light text-center">
            <button className="btn btn-secondary" onClick={handleBackToList}>
              Back to List
            </button>
          </div>
        </div>
      )}
    </div>
    </>

  );
};

export default MyPolicies;
