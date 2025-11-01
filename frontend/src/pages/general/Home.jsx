import React, { useEffect, useRef,useState } from 'react'
import '../../styles/home.css'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'



const Home = () => {
  const [videos, setVideos] = useState([]);
  const containerRef = useRef(null)
  const videosRef = useRef(new Map())

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const vids = Array.from(container.querySelectorAll('video'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
            // try to play, ignore promise rejection (autoplay policies)
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: [0.25, 0.5, 0.75, 1] }
    )

    vids.forEach((v) => observer.observe(v))

    return () => observer.disconnect()
  }, [videos])

  useEffect(()=>{
    axios.get('http://localhost:3000/api/food',{withCredentials: true})
    .then(response=>{
      console.log(response.data);
      setVideos(response.data.foodItem);
    }).catch(error=>{
      console.error('Error fetching food items:',error);  
  })
  },)
  const setVideosRef=(id)=>(el)=>{
    if(!el){
      videosRef.current.delete(id);
    }
      videosRef.current.set(id,el)
  }
    

  return (
    <ul  className="reels-container" ref={containerRef}>
      {videos.map((item) => (
        <li key={item._id} className="reel-item">
          <video
          ref={setVideosRef(item._id)}
            className="reel-video"
            src={item.video}
            loop
            muted
            playsInline
            preload="metadata"
          />

          <div className="overlay">
            <p className="description">{item.description}</p>
            <Link className="visit-btn" to={"/foodpartner/"+item.foodPartner} aria-label={`Visit store for video ${item.id}`}>
              Visit Store
            </Link>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Home