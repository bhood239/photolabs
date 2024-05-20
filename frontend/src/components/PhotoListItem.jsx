import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const sampleData = props.sampleDataForPhotoListItem;
  return (
    <div id={sampleData.id}>
      <img src={sampleData.imageSource} alt="Main" className="main-image" />
      <img src={sampleData.profile} alt="Profile" className="profile-image" />
      <div className="username">{sampleData.username}</div>
      <div className="location">
        {sampleData.location.city}, {sampleData.location.country}
      </div>
    </div>
  );
};

export default PhotoListItem;
