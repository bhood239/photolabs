import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({
  onClosePhotoDetailsModal,
  photoSelected,
  onPhotoSelect,
  updateToFavPhotoIds,
  favorites,
}) => {
  const similarPhotosArray = Object.values(photoSelected.similar_photos);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => {
          onClosePhotoDetailsModal();
        }}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton
        updateToFavPhotoIds={updateToFavPhotoIds}
        id={photoSelected.id}
        favorites={favorites}
      />
      <img
        src={photoSelected.urls.full}
        alt="Main"
        className="photo-details-modal__image"
      />
      <div className="photo-details-modal__header">
        <div className="photo-details-modal__photographer-details">
          <img
            src={photoSelected.user.profile}
            alt="Profile"
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            {photoSelected.user.name}
            <div className="photo-details-modal__photographer-location">
              {photoSelected.location.city}, {photoSelected.location.country}
            </div>
          </div>
        </div>
      </div>

      <PhotoList
        className="photo-details-modal__images"
        photos={similarPhotosArray}
        updateToFavPhotoIds={updateToFavPhotoIds}
        favorites={favorites}
        onPhotoSelect={onPhotoSelect}
      />
    </div>
  );
};

export default PhotoDetailsModal;
