import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/auth.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PartnerLogin = ()=>{
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await axios.post(
      "http://localhost:3000/api/auth/foodpartner/login",
      {
        email,
        password,
      },
      {
        withCredentials: true, //to send cookie from backend to frontend,,token save hojayega cookie me
      }
    );
    console.log("foodpartner logged in:", response.data);
    navigate("/create-food");
  };
  return (
    <div className="auth-page">
      <div className="auth-card" role="main">
        <header className="auth-header">
          <h1 className="auth-title">Partner sign in</h1>
          <p className="auth-sub">Sign in to manage your restaurant.</p>
        </header>
        <div style={{display:'flex',justifyContent:'flex-start',marginBottom:6}}>
          <Link to="/user/login" className="small-link">Sign in as user</Link>
        </div>
        <form className="auth-form" onSubmit={handleSubmit} aria-label="Partner login form">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" 
           name='email' placeholder="contact@shop.com" />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-input" type="password"
            name='password' placeholder="••••••••" />
          </div>

          <div style={{display:'flex',gap:8,marginTop:8}}>
            <button type="submit" className="btn btn-primary">Sign in</button>
            <button type="button" className="btn btn-ghost">Cancel</button>
          </div>

          <div className="form-foot">
            <span>Need an account?</span>
            <Link to="/food-partner/register" className="small-link">Create account</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PartnerLogin
