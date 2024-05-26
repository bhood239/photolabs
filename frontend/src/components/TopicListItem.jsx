import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ data, setTopicId }) => {
  return (
    <div
      id={data.id}
      className="topic-list__item"
      onClick={() => {
        setTopicId(data.id);
      }}
    >
      {data.title}
    </div>
  );
};

export default TopicListItem;
