import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/auth.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserRegister = ()=>{
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName=e.target.name.value;
    
    const email=e.target.email.value;
    const password=e.target.password.value;
    
   const response=await axios.post('http://localhost:3000/api/auth/user/register',{
      fullName,
      email,
      password
    },{
      withCredentials:true//to send cookie from backend to frontend,,token save hojayega cookie me
    })
    console.log("User registered:", response.data);
    navigate('/reels');
  }

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

        <form className="auth-form" aria-label="User register form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full name</label>
            <input className="form-input" name='name' placeholder="Jane Doe" />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" name='email' placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input name='password' className="form-input" type="password" placeholder="••••••••" />
          </div>

          <div style={{display:'flex',gap:8,marginTop:8}}>
            <button type="submit" className="btn btn-primary"
        
            >Create account</button>
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
