import React, { useEffect } from 'react';

import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {

  const {
    photoSelected,
    onPhotoSelect,
    favorites,
    updateToFavPhotoIds,
    loadedTopics,
    onLoadTopic,
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
      photos={photos} 
      onLoadTopic={onLoadTopic} 
      topics={topics}
      onPhotoSelect={onPhotoSelect} 
      favorites={favorites} 
      updateToFavPhotoIds={updateToFavPhotoIds}
      loadedTopics={loadedTopics}
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
