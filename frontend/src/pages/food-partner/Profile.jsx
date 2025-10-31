import React from 'react'
import '../../styles/profile.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
    const {profile} = useParams();
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <div className="profile-image">
            {/* Profile image placeholder */}
          </div>
          <div className="profile-details">
            <h2 className="business-name">Restaurant Name</h2>
            <p className="business-address">123 Food Street, Cityville</p>
          </div>
        </div>
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">43</span>
            <span className="stat-label">Total Meals</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">15K</span>
            <span className="stat-label">Customers Served</span>
          </div>
        </div>
      </div>
      
      <div className="video-grid">
        {Array(9).fill(0).map((_, index) => (
          <div key={index} className="video-item">
            <div className="video-placeholder">
              <span>Video {index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile