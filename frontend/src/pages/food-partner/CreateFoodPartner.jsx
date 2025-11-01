import React, { useState, useRef } from "react";
import "../../styles/create-food.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateFoodPartner = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    video: null,
  });
  const [videoPreview, setVideoPreview] = useState(null);
  const fileInputRef = useRef(null);

  const navigate=useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        video: file,
      }));
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveVideo = (e) => {
    e.stopPropagation(); // Prevent triggering the file input click
    setFormData((prev) => ({
      ...prev,
      video: null,
    }));
    setVideoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("description", formData.description);
    fd.append("video", formData.video);


    const response=await axios.post("http://localhost:3000/api/food", fd, {
      withCredentials: true,
    });
    console.log(response.data);
    navigate('/');
  };

  return (
    <div className="create-food-page">
      <form className="create-food-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Create New Food Item</h2>

        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Food Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter food name"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="form-input form-textarea"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter food description"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Food Video</label>
          <div
            className="video-input-container"
            onClick={() => fileInputRef.current.click()}
          >
            <input
              type="file"
              name="video"
              ref={fileInputRef}
              accept="video/*"
              onChange={handleVideoChange}
              style={{ display: "none" }}
              required
            />
            {videoPreview ? (
              <div className="video-preview-container">
                <video className="video-preview" src={videoPreview} controls />
                <button
                  type="button"
                  className="remove-video-button"
                  onClick={handleRemoveVideo}
                >
                  Remove Video
                </button>
              </div>
            ) : (
              <p>Click to upload video</p>
            )}
          </div>
        </div>

        <button type="submit" className="submit-button">
          Create Food Item
        </button>
      </form>
    </div>
  );
};

export default CreateFoodPartner;
