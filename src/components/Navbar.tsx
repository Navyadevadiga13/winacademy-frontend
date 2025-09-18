import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import brandLogo from "../assets/skillx_logo.jpg";
import profileImg from "../assets/profileImg.jpg"; // <-- Use the uploaded image
import { Link, useNavigate } from "react-router-dom";
import MyProfile from "../pages/MyProfile";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const navigate = useNavigate();

useEffect(() => {
  const checkToken = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  checkToken();

  window.addEventListener("storage", checkToken);

  const intervalId = setInterval(checkToken, 1000); // check every 1 second

  return () => {
    window.removeEventListener("storage", checkToken);
    clearInterval(intervalId);
  };
}, []);


const handleLogout = () => {
  localStorage.removeItem("token");
  setIsLoggedIn(false);
  navigate("/login");
  window.location.reload();
};


  return (
    <nav
      className="navbar navbar-expand-lg bg-white border-bottom shadow-sm w-100 py-3 fixed-top"
      style={{ minHeight: "70px" }}
    >
      <div className="container-fluid px-5">
        <Link
          to="/"
          className="navbar-brand fw-bold d-flex align-items-center"
          style={{ color: "#334483ff", fontSize: "1.3em", letterSpacing: "1px", textDecoration: "none" }}
        >
          <img
            src={brandLogo}
            alt="SkillX Logo"
            style={{ height: "45px", marginRight: "30px", borderRadius: "5px" }}
          />
       
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2 gap-lg-3">
            <li className="nav-item">
              <Link
                to="https://www.wizx.org/"
                className="btn fw-bold px-3 py-2 me-3"
                style={{ background: "#2f2f2f", color: "#fff", borderRadius: "20px", textDecoration: "none" }}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/courses"
                className="btn fw-bold px-3 py-2"
                style={{ background: "#2f2f2f", color: "#fff", borderRadius: "20px", textDecoration: "none" }}
              >
                All Courses
              </Link>
            </li>

            {!isLoggedIn ? (
              <li className="nav-item">
                <Link
                  to="/login"
                  className="btn fw-bold px-3 py-2"
                  style={{ background: "#2f2f2f", color: "#fff", borderRadius: "20px", textDecoration: "none" }}
                >
                  Login
                </Link>
              </li>
            ) : (
              <li className="nav-item dropdown">
                <button
                  className="btn dropdown-toggle d-flex align-items-center"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    borderRadius: "50%",
                    width: "44px",
                    height: "44px",
                    padding: 0,
                    background: "#e6e6e6",
                    border: "none",
                    justifyContent: "center",
                  }}
                  title="Profile"
                >
                  <img
                    src={profileImg}
                    alt="Profile"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      display: "block",
                      background: "#eee",
                    }}
                  />
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                  <li>
                  <button
  className="dropdown-item"
  onClick={() => setShowProfileModal(true)}
>
  My Profile
</button>

                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
     {showProfileModal && (
  <>
    {/* Backdrop */}
    <div
      className="modal-backdrop fade show"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        position: "fixed",
        inset: 0,
        zIndex: 1050,
      }}
    ></div>

    {/* Modal */}
    <div
      className="modal fade show d-block"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      style={{ zIndex: 1055 }}
    >
      <div className="modal-dialog modal-dialog-centered modal-md" role="document">
        <div
          className="modal-content rounded-4 shadow-lg"
          style={{ border: "none", overflow: "hidden", backgroundColor: "#1E293B" }}
        >
          <div
            className="modal-header border-0 px-4 py-3"
            style={{ borderBottom: "1px solid #334155" }}
          >
            <h5 className="modal-title fw-semibold text-white">My Profile</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={() => setShowProfileModal(false)}
              style={{ opacity: 0.9 }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "0.9")}
            />
          </div>
          <div
            className="modal-body"
            style={{
              backgroundColor: "#f8fafc",
              padding: "2rem",
              color: "#0f172a",
              minHeight: "300px",
            }}
          >
            <MyProfile />
          </div>
        </div>
      </div>
    </div>
  </>
)}

    </nav>
  );
}

export default Navbar;
