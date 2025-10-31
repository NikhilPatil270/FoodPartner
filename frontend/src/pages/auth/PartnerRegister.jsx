import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PartnerRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.businessName.value;
    const contactName = e.target.contactName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const password = e.target.password.value;
    // Implement registration logic here
    axios
      .post(
        "http://localhost:3000/api/auth/foodpartner/register",
        {
          name,
          contactName,
          email,
          phone,
          address,
          password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("Registration successful:", response.data);
        navigate("/create-food");
      })
      .catch((error) => {
        console.error("Registration error:", error);
      });
  };

  return (
    <div className="auth-page">
      <div className="auth-card" role="main">
        <header className="auth-header">
          <h1 className="auth-title">Partner sign up</h1>
          <p className="auth-sub">
            Create a partner account to manage your menu and orders.
          </p>
        </header>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: 6,
          }}
        >
          <Link to="/user/register" className="small-link">
            Register as normal user
          </Link>
        </div>
        <form
          className="auth-form"
          aria-label="Partner register form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label className="form-label">Business name</label>
            <input
              className="form-input"
              name="businessName"
              placeholder="Your restaurant or brand"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Contact name</label>
            <input
              className="form-input"
              name="contactName"
              placeholder="Full name of contact person"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Contact email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="contact@shop.com"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone</label>
            <input
              className="form-input"
              name="phone"
              placeholder="+1 555 555 555"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Business address</label>
            <input
              className="form-input"
              name="address"
              placeholder="Full business address"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="••••••••"
            />
          </div>

          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button type="submit" className="btn btn-primary">
              Create account
            </button>
            <button type="button" className="btn btn-ghost">
              Cancel
            </button>
          </div>

          <div className="form-foot">
            <span>Have an account?</span>
            <Link to="/food-partner/login" className="small-link">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnerRegister;
