import React from 'react';

import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import usePhotoClick from 'components/usePhotoClick';
import useFavorite from 'components/useFavorite';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const { photoSelected, handlePhotoClick, setPhotoSelected } = usePhotoClick();
  const { favorites, handleFav} = useFavorite();

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} handlePhotoClick={handlePhotoClick} favorites={favorites} handleFav={handleFav}/>
      {photoSelected !== null && <PhotoDetailsModal setPhotoSelected={setPhotoSelected} photoSelected={photoSelected} photos={photos} favorites={favorites} handleFav={handleFav} handlePhotoClick={handlePhotoClick} />}
    </div>
  );
};

export default App;
