import React, { useState,useEffect } from 'react'
import '../../styles/profile.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
    const {id} = useParams();
    const [profileData, setProfileData] = useState(null);
    const [videos,setVideos]=useState([]);


    useEffect(() => {
      axios.get(`http://localhost:3000/api/food-partner/${id}`,{withCredentials:true}).then(response => {
        setProfileData(response.data.foodPartner);
       setVideos(response.data.foodPartner.foodItems);

      }).catch(error => {
        console.error('Error fetching profile data:', error);
      });
    }, [id]);


  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <div>
            <img className="profile-image" src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000" alt="profile image" />
          </div>
          <div className="profile-details">
            <h2 className="business-name">{profileData?.name}</h2>
            <p className="business-address">{profileData?.address}</p>
          </div>
        </div>
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">{profileData?.totalmeals}</span>
            <span className="stat-label">Total Meals</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{profileData?.customersServed}</span>
            <span className="stat-label">Customers Served</span>
          </div>
        </div>
      </div>
      
      <div className="video-grid">
        {videos.map((v) => (
          <div key={v._id} className="video-item">
            <div className="video-placeholder">
              <video autoPlay loop muted style={{objectFit:'cover', width:'100%', height:'100%'}} src={v.video}></video>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile