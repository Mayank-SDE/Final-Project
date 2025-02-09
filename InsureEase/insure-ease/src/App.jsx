import  { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Lazy load the components
const Dashboard = lazy(() => import('./screens/admin/Dashboard'));
const ManagePolicies = lazy(() => import('./screens/admin/ManagePolicies'));
const ManageCustomers = lazy(() => import('./screens/admin/ManageCustomers'));
const Reports = lazy(() => import('./screens/admin/Reports'));
const AddCategory = lazy(() => import('./screens/AddCategory'));
const AddCompany = lazy(() => import('./screens/AddCompany'));
const AddPolicy = lazy(() => import('./screens/AddPolicy'));
const Categories = lazy(() => import('./screens/Categories'));
const Companies = lazy(() => import('./screens/Companies'));
const Home = lazy(() => import('./screens/Home'));
const Login = lazy(() => import('./screens/Login'));
const Orders = lazy(() => import('./screens/Orders'));
const Policies = lazy(() => import('./screens/Policies'));
const Register = lazy(() => import('./screens/Register'));
const Users = lazy(() => import('./screens/Users'));
const ForgotPassword = lazy(() => import('./screens/ForgotPassword'));

// Lazy load the components
import BuyPolicy from './screens/user/BuyPolicy';
const ClaimStatus = lazy(() => import('./screens/user/ClaimStatus'));
const MyPolicies = lazy(() => import('./screens/user/MyPolicies'));
const Profile = lazy(() => import('./screens/user/Profile'));

// Admin Protected Route Component
const AdminRoute = ({ children, isLoggedIn, userRole }) => {
  if (!isLoggedIn || userRole !== 'admin') {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// User Protected Route Component
const UserRoute = ({ children, isLoggedIn, userRole }) => {
  if (!isLoggedIn || userRole !== 'user') {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  // Sample logic for logged-in user (replace with actual logic)
  const isLoggedIn = false; // This should be derived from actual authentication status
  const userRole = "user"; // This should be set based on logged-in user's role

  return (
    <>
      {/* <Navbar isLoggedIn={isLoggedIn} userRole={userRole}/> */}
      <div className="container-md">
        {/* Suspense to handle lazy-loaded components */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Dynamic route based on login state and role */}
            <Route
              path="/home"
              element={<Home isLoggedIn={isLoggedIn} userRole={userRole} />}
            />

            {/* User Routes */}
            <Route
              path="/buy-policy"
              element={
                <UserRoute isLoggedIn={isLoggedIn} userRole={userRole}>
                  <BuyPolicy />
                </UserRoute>
              }
            />
            <Route
              path="/claim-status"
              element={
                <UserRoute isLoggedIn={isLoggedIn} userRole={userRole}>
                  <ClaimStatus />
                </UserRoute>
              }
            />
            <Route
              path="/my-policies"
              element={
                <UserRoute isLoggedIn={isLoggedIn} userRole={userRole}>
                  <MyPolicies />
                </UserRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <UserRoute isLoggedIn={isLoggedIn} userRole={userRole}>
                  <Profile />
                </UserRoute>
              }
            />

            {/* Admin Routes - Protected */}
            <Route
              path="/dashboard"
              element={
                <AdminRoute isLoggedIn={isLoggedIn} userRole={userRole}>
                  <Dashboard />
                </AdminRoute>
              }
            />
            <Route
              path="/manage-policies"
              element={
                <AdminRoute isLoggedIn={isLoggedIn} userRole={userRole}>
                  <ManagePolicies />
                </AdminRoute>
              }
            />
            <Route
              path="/manage-customers"
              element={
                <AdminRoute isLoggedIn={isLoggedIn} userRole={userRole}>
                  <ManageCustomers />
                </AdminRoute>
              }
            />
            <Route
              path="/reports"
              element={
                <AdminRoute isLoggedIn={isLoggedIn} userRole={userRole}>
                  <Reports />
                </AdminRoute>
              }
            />

            {/* Admin Pages */}
            <Route
              path="/categories"
              element={
                <AdminRoute isLoggedIn={isLoggedIn} userRole={userRole}>
                  <Categories />
                </AdminRoute>
              }
            />
            <Route
              path="/add-category"
              element={
                <AdminRoute isLoggedIn={isLoggedIn} userRole={userRole}>
                  <AddCategory />
                </AdminRoute>
              }
            />
            <Route
              path="/companies"
              element={
                <AdminRoute isLoggedIn={isLoggedIn} userRole={userRole}>
                  <Companies />
                </AdminRoute>
              }
            />
            <Route
              path="/add-company"
              element={
                <AdminRoute isLoggedIn={isLoggedIn} userRole={userRole}>
                  <AddCompany />
                </AdminRoute>
              }
            />
            <Route
              path="/policies"
              element={
                <AdminRoute isLoggedIn={isLoggedIn} userRole={userRole}>
                  <Policies />
                </AdminRoute>
              }
            />
            <Route
              path="/add-policy"
              element={
                <AdminRoute isLoggedIn={isLoggedIn} userRole={userRole}>
                  <AddPolicy />
                </AdminRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <AdminRoute isLoggedIn={isLoggedIn} userRole={userRole}>
                  <Orders />
                </AdminRoute>
              }
            />
            <Route
              path="/users"
              element={
                <AdminRoute isLoggedIn={isLoggedIn} userRole={userRole}>
                  <Users />
                </AdminRoute>
              }
            />
          </Routes>
        </Suspense>

        <ToastContainer />
      </div>
    </>
  );
}

export default App;
