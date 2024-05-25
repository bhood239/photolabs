import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({photo, updateToFavPhotoIds, favorites, onPhotoSelect}) => {
  
  return (
    <div id={photo.id} className="photo-list__item" onClick={() => {onPhotoSelect(photo)}}>
      <PhotoFavButton updateToFavPhotoIds={updateToFavPhotoIds} id={photo.id} favorites={favorites} />
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
