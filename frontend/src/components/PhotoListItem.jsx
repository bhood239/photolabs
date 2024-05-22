import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({photo, handleFav}) => {
  
  return (
    <div id={photo.id} className="photo-list__item">
      <PhotoFavButton handleFav={handleFav} id={photo.id}/>
      <img src={photo.urls.regular} alt="Main" className="photo-list__image" />
        <div className="photo-list__user-details">
          <img src={photo.user.profile} alt="Profile" className="photo-list__user-profile" />
          <div className="photo-list__user-info">
            {photo.user.name}
            <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
    </div>
  );
};

export default PhotoListItem;
