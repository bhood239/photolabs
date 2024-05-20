import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div id={props.sampleDataForPhotoListItem.id}>
      <img src={props.sampleDataForPhotoListItem.imageSource} alt="Main" className="main-image" />
      <img src={props.sampleDataForPhotoListItem.profile} alt="Profile" className="profile-image" />
      <div className="username">{props.sampleDataForPhotoListItem.username}</div>
      <div className="location">
        {props.sampleDataForPhotoListItem.location.city}, {props.sampleDataForPhotoListItem.location.country}
      </div>
    </div>
  );
};

export default PhotoListItem;
