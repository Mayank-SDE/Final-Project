import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CarInsuranceImage from '../assets/images/car.png';
import HealthInsuranceImage from '../assets/images/health.png';
import LifeInsuranceImage from '../assets/images/life.png';
const Home = ({ isLoggedIn, userRole }) => {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} userRole={userRole} />

      <div className="container py-5">
        <div className="row text-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold text-primary">Welcome to InsuranceApp</h1>
            <p className="lead text-muted">
              Manage your policies, track claims, and get the best insurance deals right here.
            </p>
            {!isLoggedIn ? (
              <div>
                <Link to="/register" className="btn btn-success btn-lg m-2">
                  Register Now
                </Link>
                <Link to="/login" className="btn btn-primary btn-lg m-2">
                  Login
                </Link>
              </div>
            ) : userRole === 'admin' ? (
              <div>
                <Link to="/dashboard" className="btn btn-primary btn-lg m-2">
                  Admin Dashboard
                </Link>
                <Link to="/manage-policies" className="btn btn-warning btn-lg m-2">
                  Manage Policies
                </Link>
                <Link to="/manage-customers" className="btn btn-info btn-lg m-2">
                  Manage Customers
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/my-policies" className="btn btn-primary btn-lg m-2">
                  My Policies
                </Link>
                <Link to="/buy-policy" className="btn btn-success btn-lg m-2">
                  Buy New Policy
                </Link>
                <Link to="/claim-status" className="btn btn-danger btn-lg m-2">
                  Claim Status
                </Link>
              </div>
            )}
          </div>
          <div className="col-md-6">
            {/* Carousel for Insurance Images */}
            <div
              id="insuranceCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={CarInsuranceImage}
                    className="d-block w-100"
                    alt="Car Insurance"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={HealthInsuranceImage}
                    className="d-block w-100"
                    alt="Health Insurance"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={LifeInsuranceImage}
                    className="d-block w-100"
                    alt="Life Insurance"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#insuranceCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#insuranceCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="row text-center mt-5">
          <div className="col-md-4">
            <h4 className="text-primary">Reliable Policies</h4>
            <p className="text-muted">
              Choose from a wide range of reliable insurance policies tailored for your needs.
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="text-primary">Track Claims Easily</h4>
            <p className="text-muted">
              Get updates and track the status of your claims with ease, anytime, anywhere.
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="text-primary">Manage Your Profile</h4>
            <p className="text-muted">
              Update your personal details, manage preferences, and access your insurance information in one place.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
