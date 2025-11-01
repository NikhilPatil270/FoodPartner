import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth-shared.css';

export default function ChooseRegister() {
  return (
    <div className="landing-wrapper">
      <nav className="navbar">
        <div className="logo">FoodieHub</div>
        <div className="nav-links">
          <Link to="/user/login">Login</Link>
          <Link to="/user/register" className="primary-btn">Sign Up</Link>
        </div>
      </nav>

      <section className="hero">
        <h1>Discover, Save & Enjoy Delicious Food Videos</h1>
        <p>Join as a foodie or a food partner and explore daily trending reels.</p>
        <div className="hero-actions">
          <Link to="/user/register" className="cta">Get Started</Link>
          <Link to="/food-partner/register" className="cta outline">Become a Partner</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Watch Reels</h3>
          <p>Browse through snack-sized food videos crafted to inspire your cravings.</p>
        </div>
        <div className="feature-card">
          <h3>Save & Like</h3>
          <p>Keep your favorites and share reactions with the community.</p>
        </div>
        <div className="feature-card">
          <h3>Upload Content</h3>
          <p>Food partners can upload and showcase their culinary creations.</p>
        </div>
      </section>

      <footer>
        <p>© 2025 FoodieHub. All rights reserved.</p>
      </footer>
    </div>
  );
}