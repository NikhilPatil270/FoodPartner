import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/auth.css'

const PartnerRegister = ()=>{
  return (
    <div className="auth-page">
      <div className="auth-card" role="main">
        <header className="auth-header">
          <h1 className="auth-title">Partner sign up</h1>
          <p className="auth-sub">Create a partner account to manage your menu and orders.</p>
        </header>
        <div style={{display:'flex',justifyContent:'flex-start',marginBottom:6}}>
          <Link to="/user/register" className="small-link">Register as normal user</Link>
        </div>
        <form className="auth-form" aria-label="Partner register form">
          <div className="form-group">
            <label className="form-label">Business name</label>
            <input className="form-input" placeholder="Your restaurant or brand" />
          </div>

          <div className="form-group">
            <label className="form-label">Contact name</label>
            <input className="form-input" placeholder="Full name of contact person" />
          </div>

          <div className="form-group">
            <label className="form-label">Contact email</label>
            <input className="form-input" type="email" placeholder="contact@shop.com" />
          </div>

          <div className="form-group">
            <label className="form-label">Phone</label>
            <input className="form-input" placeholder="+1 555 555 555" />
          </div>

          <div className="form-group">
            <label className="form-label">Business address</label>
            <input className="form-input" placeholder="Full business address" />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-input" type="password" placeholder="••••••••" />
          </div>

          <div style={{display:'flex',gap:8,marginTop:8}}>
            <button type="button" className="btn btn-primary">Create account</button>
            <button type="button" className="btn btn-ghost">Cancel</button>
          </div>

          <div className="form-foot">
            <span>Have an account?</span>
            <Link to="/food-partner/login" className="small-link">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PartnerRegister
