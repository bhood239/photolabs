import { useState } from "react";
import topics from 'mocks/topics';
import TopicListItem from "../components/TopicListItem";

const useApplicationData = () => {

  const [photoSelected, setPhotoSelected] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [loadedTopics, setLoadedTopics] = useState([]);

  const onPhotoSelect = (photo) => {
    setPhotoSelected(photo);
  };

  const updateToFavPhotoIds = (id) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter(favId => favId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };

  const onLoadTopic = () => {
    setLoadedTopics(topics);
  };

  const onClosePhotoDetailsModal = () => {
    setPhotoSelected(null);
  };

  return {photoSelected, onPhotoSelect, favorites, updateToFavPhotoIds, onLoadTopic, onClosePhotoDetailsModal}
}

export default useApplicationData;