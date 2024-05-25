import { useReducer, useEffect } from "react";
import topics from 'mocks/topics';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

const initialState = {
  photoSelected: null,
  favorites: [],
  topicData: [],
  photoData: []
};


const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload)
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        photoSelected: action.payload
      };
    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return {
        ...state,
        photoSelected: null
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};


const useApplicationData = () => {

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data}));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data}));
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const updateToFavPhotoIds = (id) => {
    if (state.favorites.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: id });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: id });
    }
  };

  const onLoadTopic = () => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topics });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS });
  };

  return {
    photoData: state.photoData,
    photoSelected: state.photoSelected,
    onPhotoSelect,
    favorites: state.favorites,
    updateToFavPhotoIds,
    loadedTopics: state.topicData,
    onLoadTopic,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;