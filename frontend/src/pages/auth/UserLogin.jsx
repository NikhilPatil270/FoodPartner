import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await axios.post(
      "http://localhost:3000/api/auth/user/login",
      {
        email,
        password,
      },
      {
        withCredentials: true, //to send cookie from backend to frontend,,token save hojayega cookie me
      }
    );
    console.log("User logged in:", response.data);
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-card" role="main">
        <header className="auth-header">
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-sub">Sign in to continue ordering.</p>
        </header>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: 6,
          }}
        >
          <Link to="/food-partner/login" className="small-link">
            Sign in as food partner
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className="auth-form"
          aria-label="User login form"
        >
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              name="password"
              type="password"
              placeholder="••••••••"
            />
          </div>

          <div
            className="form-group"
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <label
              style={{ display: "flex", alignItems: "center", gap: 8 }}
              className="form-label"
            >
              <input type="checkbox" /> Remember
            </label>
            <a className="small-link" href="#">
              Forgot?
            </a>
          </div>

          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
            <button type="button" className="btn btn-ghost">
              Cancel
            </button>
          </div>

          <div className="form-foot">
            <span>New here?</span>
            <Link to="/user/register" className="small-link">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
