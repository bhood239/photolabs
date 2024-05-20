import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  
  
  /* Insert React */
  const sampleData = props.photo;
  return (
    <div id={sampleData.id} className="photo-list__item">
      <PhotoFavButton/>
      <img src={sampleData.imageSource} alt="Main" className="photo-list__image" />
        <div className="photo-list__user-details">
          <img src={sampleData.profile} alt="Profile" className="photo-list__user-profile" />
          <div className="photo-list__user-info">
            {sampleData.username}
            <div className="photo-list__user-location">
            {sampleData.location.city}, {sampleData.location.country}
            </div>
          </div>
          
        </div>
    </div>
  );
};

export default PhotoListItem;
