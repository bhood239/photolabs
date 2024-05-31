import React from "react";

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
  onFavoriteClicked,
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        onLoadTopic={onLoadTopic}
        loadedTopics={loadedTopics}
        isFavPhotoExist={favorites.length > 0}
        setTopicId={setTopicId}
        onFavoriteClicked={onFavoriteClicked}
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
