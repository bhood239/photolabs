import React from 'react';

import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import usePhotoClick from 'components/usePhotoClick';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const { photoSelected, handlePhotoClick } = usePhotoClick();

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} handlePhotoClick={handlePhotoClick}/>
      {photoSelected === true && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
