import React, { useEffect } from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({data, loadPhotosByTopic}) => {

  const handleClick = () => {
    loadPhotosByTopic(data.id);
  }

  return (
    <div id={data.id} className="topic-list__item" onClick={handleClick}>
      {data.title}
    </div>
  );
};

export default TopicListItem;
