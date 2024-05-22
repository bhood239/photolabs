import React from 'react';

import { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({ photos, topics }) => {

  const [favorite, setFavorite] = useState(false);

  const handleFav = () => {
    setFavorite(true);
  }

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={favorite} />
      <PhotoList photos={photos} handleFav={handleFav}/>
    </div>
  );
};

export default HomeRoute;
