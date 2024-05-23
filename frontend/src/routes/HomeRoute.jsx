import React from 'react';

import { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({ photos, topics, handlePhotoClick }) => {

  const [favorites, setFavorites] = useState([]);

  const handleFav = (id) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter(favId => favId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  }

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={favorites.length > 0} />
      <PhotoList photos={photos} handleFav={handleFav} favorites={favorites} handlePhotoClick={handlePhotoClick} />
    </div>
  );
};

export default HomeRoute;
