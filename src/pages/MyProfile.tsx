import React, { useState, useEffect } from "react";
import profileImg from "../assets/profileImg.jpg";

interface UserProfile {
  _id: string;
  username: string;
  email?: string;
  phone?: string;
  department?: string;
  createdAt: string;
  updatedAt: string;
}

export default function MyProfile() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token: string | null = localStorage.getItem("token");
      if (!token) {
        setError("Authentication token missing");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/myprofile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error(`Failed to fetch profile (${res.status})`);
        }
        const data = await res.json();
        setUser(data.user);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center my-5"
        style={{ minHeight: "40vh" }}
      >
        <div className="spinner-border text-primary" role="status" />
      </div>
    );

  if (error)
    return (
      <div className="text-danger text-center my-5">
        Error: {error}
      </div>
    );

  if (!user)
    return <div className="text-center my-5">User data not found.</div>;

  return (
    <div
      className="container py-5 d-flex justify-content-center"
      style={{ maxWidth: "600px" }}
    >
      <div
        className="card shadow-sm rounded-4 p-4 w-100"
        style={{ backgroundColor: "#fefefe" }}
      >
        <div className="d-flex align-items-center mb-4">
          <img
            src={profileImg}
            alt="Profile"
            className="rounded-circle border border-secondary"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              marginRight: "25px",
            }}
          />
          <div>
            <h3 className="fw-bold text-primary mb-1">{user.username}</h3>
            {user.department && (
              <p
                className="mb-0 fst-italic text-muted"
                style={{ letterSpacing: "0.03em" }}
              >
                {user.department}
              </p>
            )}
          </div>
        </div>

        <hr />

        <div className="mb-3 row">
          <div className="col-4 fw-semibold text-secondary">Email:</div>
          <div className="col-8">
            {user.email ?? <span className="text-muted">Not provided</span>}
          </div>
        </div>

        <div className="mb-3 row">
          <div className="col-4 fw-semibold text-secondary">Phone:</div>
          <div className="col-8">
            {user.phone ?? <span className="text-muted">Not provided</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
