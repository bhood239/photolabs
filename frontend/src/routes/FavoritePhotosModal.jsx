import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

const FavoritePhotosModal = ({
  onPhotoSelect,
  updateToFavPhotoIds,
  favorites,
  photos,
  onFavoriteClicked,
}) => {
  const favoritePhotos = photos.filter((photo) => favorites.includes(photo.id));

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => {
          onFavoriteClicked();
        }}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <span className="fav-photos-modal__text">Favorite Photos</span>
      {favoritePhotos.length === 0 ? (
        <p className="fav-photos-modal__empty-message">No Favorite Photos</p>
      ) : (
        <PhotoList
          className="photo-details-modal__images"
          photos={favoritePhotos}
          updateToFavPhotoIds={updateToFavPhotoIds}
          favorites={favorites}
          onPhotoSelect={onPhotoSelect}
        />
      )}
    </div>
  );
};

export default FavoritePhotosModal;
