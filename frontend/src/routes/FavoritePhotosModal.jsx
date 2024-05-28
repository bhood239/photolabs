import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const FavoritePhotosModal = ({
  onClosePhotoDetailsModal,
  onPhotoSelect,
  updateToFavPhotoIds,
  favorites,
  photos,
  setFavoriteClicked,
}) => {
  const favoritePhotos = photos.filter((photo) => favorites.includes(photo.id));

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => {
          setFavoriteClicked(false);
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
