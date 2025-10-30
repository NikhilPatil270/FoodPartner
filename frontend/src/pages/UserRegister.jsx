import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'

const UserRegister = ()=>{
  return (
    <div className="auth-page">
      <div className="auth-card" role="main">
        <header className="auth-header">
          <h1 className="auth-title">Create your account</h1>
          <p className="auth-sub">Sign up to order your favorite meals.</p>
        </header>

        <div style={{display:'flex',justifyContent:'flex-end',marginBottom:6}}>
          <Link to="/food-partner/register" className="small-link">Register as food partner</Link>
        </div>

        <form className="auth-form" aria-label="User register form">
          <div className="form-group">
            <label className="form-label">Full name</label>
            <input className="form-input" placeholder="Jane Doe" />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" placeholder="you@example.com" />
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
            <span>Already have an account?</span>
            <Link to="/user/login" className="small-link">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserRegister
