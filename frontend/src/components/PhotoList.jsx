import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, handleFav, favorites }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem photo={photo} handleFav={handleFav} favorites={favorites} />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
