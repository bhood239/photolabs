import React from "react";

import { useState } from "react";
import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";

const HomeRoute = ({
  photos,
  onLoadTopic,
  loadedTopics,
  onPhotoSelect,
  favorites,
  updateToFavPhotoIds,
  setTopicId,
  setFavoriteClicked,
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        onLoadTopic={onLoadTopic}
        loadedTopics={loadedTopics}
        isFavPhotoExist={favorites.length > 0}
        setTopicId={setTopicId}
        setFavoriteClicked={setFavoriteClicked}
      />
      <PhotoList
        photos={photos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        favorites={favorites}
        onPhotoSelect={onPhotoSelect}
      />
    </div>
  );
};

export default HomeRoute;
