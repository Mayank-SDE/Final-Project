import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Navbar';

const BuyPolicy = () => {
  // Hardcoded policy data
  const policies = [
    {
      id: 1,
      name: 'Health Insurance Plan A',
      type: 'Health',
      coverage: '$100,000',
      price: '$120/month',
      duration: '1 Year',
      description: 'Comprehensive health coverage including hospital stays, surgeries, and outpatient services.',
    },
    {
      id: 2,
      name: 'Car Insurance Plan B',
      type: 'Auto',
      coverage: '$50,000',
      price: '$80/month',
      duration: '1 Year',
      description: 'Protects against accidents, theft, and damages to your vehicle.',
    },
    {
      id: 3,
      name: 'Life Insurance Plan C',
      type: 'Life',
      coverage: '$500,000',
      price: '$150/month',
      duration: '5 Years',
      description: 'Ensures financial security for your family with comprehensive life coverage.',
    },
  ];

  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

  const handleSelectPolicy = (policy) => {
    setSelectedPolicy(policy);
    setPurchaseConfirmed(false);
  };

  const handlePurchase = () => {
    setPurchaseConfirmed(true);
  };

  return (
    <>
    <Navbar isLoggedIn={true} userRole={"user"} />
    <div className="container my-5">
      <h1 className="text-center display-4 mb-5">Buy Policy</h1>
      {!selectedPolicy ? (
        <div className="row g-4">
          {policies.map((policy) => (
            <div key={policy.id} className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-primary">{policy.name}</h5>
                  <p className="card-text text-muted">Type: {policy.type}</p>
                  <p className="card-text text-secondary">Coverage: {policy.coverage}</p>
                  <p className="card-text text-secondary">Price: {policy.price}</p>
                  <p className="card-text text-secondary">Duration: {policy.duration}</p>
                </div>
                <div className="card-footer bg-light text-center">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => handleSelectPolicy(policy)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card shadow-lg border-0">
          <div className="card-header bg-primary text-white text-center">
            <h2>{selectedPolicy.name}</h2>
          </div>
          <div className="card-body">
            <p><strong>Type:</strong> {selectedPolicy.type}</p>
            <p><strong>Coverage:</strong> {selectedPolicy.coverage}</p>
            <p><strong>Price:</strong> {selectedPolicy.price}</p>
            <p><strong>Duration:</strong> {selectedPolicy.duration}</p>
            <p>{selectedPolicy.description}</p>
          </div>
          <div className="card-footer bg-light text-center">
            {!purchaseConfirmed ? (
              <button className="btn btn-success" onClick={handlePurchase}>
                Buy Now
              </button>
            ) : (
              <p className="text-success fw-bold">Purchase Confirmed!</p>
            )}
            <button className="btn btn-secondary mt-2" onClick={() => setSelectedPolicy(null)}>
              Back to Policies
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default BuyPolicy;
