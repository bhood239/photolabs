import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ onLoadTopic, loadedTopics, isFavPhotoExist, setTopicId }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => {setTopicId(undefined)}}>PhotoLabs</span>
      <TopicList onLoadTopic={onLoadTopic} loadedTopics={loadedTopics} setTopicId={setTopicId} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
}

export default TopNavigation;