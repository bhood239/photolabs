import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, updateToFavPhotoIds, favorites, onPhotoSelect }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem photo={photo} updateToFavPhotoIds={updateToFavPhotoIds} favorites={favorites} onPhotoSelect={onPhotoSelect} />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
