import React from 'react';

import { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({ photos, onLoadTopic, topics, onPhotoSelect, favorites, updateToFavPhotoIds }) => {

  return (
    <div className="home-route">
      <TopNavigation onLoadTopic={onLoadTopic} topics={topics} isFavPhotoExist={favorites.length > 0} />
      <PhotoList photos={photos} updateToFavPhotoIds={updateToFavPhotoIds} favorites={favorites} onPhotoSelect={onPhotoSelect} />
    </div>
  );
};

export default HomeRoute;
