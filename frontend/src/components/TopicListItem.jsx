import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const data = props.data;

  return (
    <div id={data.id} className="topic-list__item">
      {data.title}
    </div>
  );
};

export default TopicListItem;
