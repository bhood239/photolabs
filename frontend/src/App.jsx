import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import FavoritePhotosModal from "routes/FavoritePhotosModal";

const App = () => {
  const {
    photoData,
    photoSelected,
    onPhotoSelect,
    favorites,
    updateToFavPhotoIds,
    loadedTopics,
    onLoadTopic,
    onClosePhotoDetailsModal,
    setTopicId,
    onFavoriteClicked,
    favoriteClicked,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        onLoadTopic={onLoadTopic}
        topics={loadedTopics}
        onPhotoSelect={onPhotoSelect}
        favorites={favorites}
        updateToFavPhotoIds={updateToFavPhotoIds}
        loadedTopics={loadedTopics}
        setTopicId={setTopicId}
        onFavoriteClicked={onFavoriteClicked}
      />
      {photoSelected !== null && (
        <PhotoDetailsModal
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          photoSelected={photoSelected}
          onPhotoSelect={onPhotoSelect}
          favorites={favorites}
          updateToFavPhotoIds={updateToFavPhotoIds}
        />
      )}
      {favoriteClicked !== false && (
        <FavoritePhotosModal
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          photoSelected={photoSelected}
          onPhotoSelect={onPhotoSelect}
          favorites={favorites}
          updateToFavPhotoIds={updateToFavPhotoIds}
          photos={photoData}
          onFavoriteClicked={onFavoriteClicked}
        />
      )}
    </div>
  );
};

export default App;
