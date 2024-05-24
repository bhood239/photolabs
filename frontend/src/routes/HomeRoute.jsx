import React from 'react';

import { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import useFavorite from 'components/useFavorite';

const HomeRoute = ({ photos, topics, handlePhotoClick, favorites, handleFav }) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={favorites.length > 0} />
      <PhotoList photos={photos} handleFav={handleFav} favorites={favorites} handlePhotoClick={handlePhotoClick} />
    </div>
  );
};

export default HomeRoute;
