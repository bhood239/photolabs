import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({data, setTopicId}) => {

  const handleClick = () => {
    setTopicId(data.id);
  }

  return (
    <div id={data.id} className="topic-list__item" onClick={handleClick}>
      {data.title}
    </div>
  );
};

export default TopicListItem;
