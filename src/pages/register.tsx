import React, { useState } from "react";
import { Link } from "react-router-dom";


import Select from 'react-select';

const EyeIcon = ({ visible }: { visible: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    {visible ? (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <path d="M9.5 9.5a3 3 0 014 4" />
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      </>
    ) : (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    )}
  </svg>
);

export default function Register() {
  const [formData, setFormData] = useState({
  username: "",
  phone: "",
  department: "",
  email: "",
  password: "",
  confirm_password: "",
});


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
const departmentOptions = [
  { value: "Marketing", label: "Marketing" },
  { value: "Sales department Training", label: "Sales department Training" },
  { value: "Client", label: "Client" },
  { value: "HR", label: "HR" },
  { value: "B2B", label: "B2B" },
  { value: "Business", label: "Business" },
  { value: "IT & Development", label: "IT & Development" },
  { value: "IT,Software & Technology", label: "IT,Software & Technology" },
  { value: "Language", label: "Language" },
  { value: "Employability", label: "Employability" },
  { value: "Web Development", label: "Web Development" },
  { value: "Healthcare, Safety & Fitness", label: "Healthcare, Safety & Fitness" },
  { value: "Accounting & Finance", label: "Accounting & Finance" },
  { value: "Personal Development", label: "Personal Development" },
  { value: "Health & Fitness", label: "Health & Fitness" },
  { value: "Career Bundles", label: "Career Bundles" },
  { value: "Teaching & Education", label: "Teaching & Education" },
  { value: "Beauty & Wellness", label: "Beauty & Wellness" },
  { value: "HR & Leadership", label: "HR & Leadership" },
  { value: "Marketing & Advertising", label: "Marketing & Advertising" },
  { value: "Business & Management", label: "Business & Management" },
  { value: "Sports", label: "Sports" },
  { value: "Animal Care", label: "Animal Care" },
  { value: "Lifestyle", label: "Lifestyle" },
  { value: "Psychology", label: "Psychology" },
  { value: "Security", label: "Security" },
  { value: "Therapy", label: "Therapy" },
  { value: "Photography & Video", label: "Photography & Video" },
  { value: "Management", label: "Management" },
  { value: "Project Management", label: "Project Management" },
  { value: "Hospitality", label: "Hospitality" },
  { value: "Computers & IT", label: "Computers & IT" },
];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

  if (
  !formData.username ||
  !formData.phone ||
  !formData.department ||
  !formData.email ||
  !formData.password ||
  !formData.confirm_password
) {
  setError("Please fill in all required fields.");
  return;
}

    if (formData.password !== formData.confirm_password) {
      setError("Passwords don't match.");
      return;
    }
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:5000/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed");
      } else {
        setSuccess(data.message || "Registration successful");
        setFormData({
          username: "",
          phone: "",
          department: "",
          email:"",
          password: "",
          confirm_password: "",
        });
      }
    } catch {
      setError("Network error: Unable to register");
    } finally {
      setLoading(false);
    }
  };

  const inputWrapperStyle = { position: "relative" as const };

  const eyeButtonStyle: React.CSSProperties = {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: "translateY(-50%)",
    background: "transparent",
    border: "none",
    color: "#0d47a1",
    cursor: "pointer",
    padding: 0,
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    color: "#0d47a1",
    border: "1.5px solid rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: 12,
    padding: "12px 40px 12px 16px", // extra right padding for eye button
    fontSize: 16,
    width: "100%",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center px-3"
      style={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #a8edea, #fed6e3)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      
      <div
      // Inside the wrapping div style for the form
style={{
  background: "rgba(255, 255, 255, 0.25)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  borderRadius: 20,
  border: "1px solid rgba(255, 255, 255, 0.18)",
  padding: "2rem",
  maxWidth: 700,    // increased from 480
  width: "90%",    // makes it responsive, can be "100%" or "90%"
  color: "#0d71ff",
}}

      >       <Link
  to="/"
  style={{
    color: "#084bb8",
    fontWeight: "700",
    textDecoration: "none",
    display: "inline-block",
    marginBottom: "1.5rem",
  }}
>
  &larr; Back to Home
</Link>
        <h2
          className="mb-4 text-center"
          style={{
            fontWeight: 700,
            letterSpacing: 2,
            fontSize: "1.8rem",
            color: "#0d47a1",
            textShadow: "0 0 5px rgba(13,71,161,0.5)",
          }}
        >
 Begin Your Journey Here...
        </h2>

{error && (
  <div className="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
    <span>{error}</span>
    <button type="button" className="btn-close" aria-label="Close" onClick={() => setError(null)}></button>
  </div>
)}

{success && (
  <div className="alert alert-success d-flex justify-content-between align-items-center" role="alert">
    <span>{success}</span>
    <button type="button" className="btn-close" aria-label="Close" onClick={() => setSuccess(null)}></button>
  </div>
)}


        <form onSubmit={handleSubmit} noValidate>
          <div className="row g-3">
            {/* Name */}
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Name*
              </label>
            <input
  style={inputStyle}
  type="text"
  id="username"
  name="username"
  value={formData.username}
  onChange={handleChange}
  placeholder="Enter your username"
  required
  autoComplete="username"
/>

            </div>

            {/* Email */}
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email*
              </label>
              <input
                style={inputStyle}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
                autoComplete="email"
              />
            </div>

            {/* Contact */}
        <div className="col-md-6">
  <label htmlFor="phone" className="form-label">
    Phone Number*
  </label>
  <input
    style={inputStyle}
    type="tel"
    id="phone"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="9876543210"
    required
    maxLength={10}
    autoComplete="tel"
  />
</div>


<div className="col-md-6">
  <label htmlFor="department" className="form-label">Department*</label>
  <Select
    inputId="department" // for accessibility
    options={departmentOptions}
    value={departmentOptions.find(opt => opt.value === formData.department) || null}
    onChange={(selectedOption) =>
      setFormData(prev => ({ ...prev, department: selectedOption ? selectedOption.value : "" }))
    }
    placeholder="Select your department"
    isClearable
  />
</div>



            {/* Password */}
            <div className="col-md-6" style={inputWrapperStyle}>
              <label htmlFor="password" className="form-label">
                Password*
              </label>
              <input
                style={inputStyle}
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                style={eyeButtonStyle}
                onClick={() => setShowPassword((v) => !v)}
              >
                <EyeIcon visible={showPassword} />
              </button>
            </div>

            {/* Confirm Password */}
            <div className="col-md-6" style={inputWrapperStyle}>
              <label htmlFor="confirm_password" className="form-label">
                Confirm Password*
              </label>
              <input
                style={inputStyle}
                type={showConfirmPassword ? "text" : "password"}
                id="confirm_password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                placeholder="Retype your password"
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                style={eyeButtonStyle}
                onClick={() => setShowConfirmPassword((v) => !v)}
              >
                <EyeIcon visible={showConfirmPassword} />
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-100 fw-bold"
            style={{
              marginTop: "1.5rem",
              padding: "1rem",
              fontSize: "1.2rem",
              background: "rgba(0, 77, 255, 0.75)",
              border: "none",
              borderRadius: "50px",
              color: "white",
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: "0 0 10px rgba(0, 77, 255, 0.7)",
              transition: "background 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0, 77, 255, 1)";
              e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 77, 255, 1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0, 77, 255, 0.75)";
              e.currentTarget.style.boxShadow = "0 0 10px rgba(0, 77, 255, 0.7)";
            }}
          >
            {loading ? "Registering..." : "Register"}
          </button>
   

         <p
  style={{
    marginTop: 16,
    textAlign: "center",
    fontWeight: "500",
    color: "#0d71ff",
  }}
>
  Already Have an Account?{" "}
  <Link
    to="/login"
    style={{ color: "#084bb8", fontWeight: "700", textDecoration: "none" }}
  >
    Login here
  </Link>
</p>


        </form>
      </div>
    </div>
  );
}
  