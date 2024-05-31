import { useReducer, useEffect } from "react";
import axios from "axios";
import topics from 'mocks/topics';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_PHOTOS_BY_TOPICS: 'SET_PHOTOS_BY_TOPICS',
  SET_TOPIC_ID: 'SET_TOPIC_ID',
  SET_FAVORITE_CLICKED: 'SET_FAVORITE_CLICKED'
}

const initialState = {
  photoSelected: null,
  favorites: [],
  topicData: [],
  photoData: [],
  topicId: undefined,
  favoriteClicked: false
};


const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: action.payload
      }
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
        photoSelected: state.photoData.find(photo => photo.id === action.payload.id)
      };
    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return {
        ...state,
        photoSelected: null
      };
    case ACTIONS.SET_TOPIC_ID:
      return {
        ...state,
        topicId: action.payload
      };
      case ACTIONS.SET_FAVORITE_CLICKED:
      return {
        ...state,
        favoriteClicked: action.payload
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};


const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // GET photos by topic if topic is selected || GET all photos
  useEffect(() => {
    if (state.topicId) {
      axios
      .get(`/api/topics/photos/${state.topicId}`)
      .then(res => dispatch({ type: ACTIONS.SET_PHOTOS_BY_TOPICS, payload: res.data }))
      .catch(err => console.log('error:', err.message))
    } else {
      axios
      .get('/api/photos')
      .then(res => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data}))
      .catch(err => console.log('error:', err.message));
    }
  }, [state.topicId]);
  
  const setTopicId = (id) => {
    dispatch({ type: ACTIONS.SET_TOPIC_ID, payload: id });
  };

  // GET topics
  useEffect(() => {
    axios
    .get('/api/topics')
    .then(res => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: res.data}))
    .catch(err => console.log('error:', err.message));
  }, []);

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const onFavoriteClicked = () => {
    if (state.favoriteClicked === false) {
      dispatch({ type: ACTIONS.SET_FAVORITE_CLICKED, payload: true });
    } else {
      dispatch({ type: ACTIONS.SET_FAVORITE_CLICKED, payload: false });
    }
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
    onClosePhotoDetailsModal,
    setTopicId,
    onFavoriteClicked,
    favoriteClicked: state.favoriteClicked
  };
};

export default useApplicationData;