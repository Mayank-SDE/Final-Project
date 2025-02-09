import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Navbar';

const ClaimStatus = () => {
  // Hardcoded claim data
  const claims = [
    {
      id: 1,
      policyNumber: 'PN123456',
      status: 'Approved',
      description: 'Claim for health expenses submitted on 12/12/2024.',
      date: '2024-12-15',
    },
    {
      id: 2,
      policyNumber: 'PN654321',
      status: 'Pending',
      description: 'Claim for vehicle accident submitted on 12/10/2024.',
      date: '2024-12-18',
    },
    {
      id: 3,
      policyNumber: 'PN987654',
      status: 'Rejected',
      description: 'Claim for life insurance benefit submitted on 12/01/2024.',
      date: '2024-12-20',
    },
  ];

  return (
    <>  
    <Navbar isLoggedIn={true} userRole={"user"} />
    <div className="container my-5">
      <h1 className="text-center display-5 mb-4">Claim Status</h1>
      <div className="row g-4">
        {claims.map((claim) => (
          <div key={claim.id} className="col-lg-4 col-md-6">
            <div className={`card h-100 shadow-sm border-0`}>
              <div
                className={`card-header ${
                  claim.status === 'Approved'
                    ? 'bg-success text-white'
                    : claim.status === 'Pending'
                    ? 'bg-warning text-dark'
                    : 'bg-danger text-white'
                }`}
              >
                <h5 className="card-title mb-0">{`Claim #${claim.id}`}</h5>
              </div>
              <div className="card-body">
                <p className="card-text"><strong>Policy Number:</strong> {claim.policyNumber}</p>
                <p className="card-text"><strong>Status:</strong> {claim.status}</p>
                <p className="card-text"><strong>Description:</strong> {claim.description}</p>
                <p className="card-text text-muted"><strong>Date:</strong> {claim.date}</p>
              </div>
              <div className="card-footer text-center">
                {claim.status === 'Pending' && (
                  <button className="btn btn-primary btn-sm">Submit Documents</button>
                )}
                {claim.status === 'Rejected' && (
                  <button className="btn btn-danger btn-sm">Appeal Decision</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  
  );
};

export default ClaimStatus;
