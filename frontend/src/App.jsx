import React, { useEffect } from 'react';

import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'components/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    photoSelected,
    onPhotoSelect,
    favorites,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  useEffect(() => {
    onLoadTopic();
  }, []);

  return (
    <div className="App">
      <HomeRoute 
      photos={photos} 
      onLoadTopic={onLoadTopic} 
      topics={topics}
      onPhotoSelect={onPhotoSelect} 
      favorites={favorites} 
      updateToFavPhotoIds={updateToFavPhotoIds}
      />
      {photoSelected !== null && 
      <PhotoDetailsModal 
      onClosePhotoDetailsModal={onClosePhotoDetailsModal} 
      photoSelected={photoSelected} 
      onPhotoSelect={onPhotoSelect} 
      favorites={favorites} 
      updateToFavPhotoIds={updateToFavPhotoIds} 
      />
      }
    </div>
  );
};

export default App;
