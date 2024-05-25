import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {
  

  const {
    photoData,
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
      photos={photoData} 
      onLoadTopic={onLoadTopic} 
      topics={loadedTopics}
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
