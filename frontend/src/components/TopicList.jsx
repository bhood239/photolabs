import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics }) => {

  return (
    <div className="top-nav-bar__topic-list">
        {topics.map((data) => (
          <div key={data.id}>
            <TopicListItem data={data} />
          </div>
        ))}
    </div>
  );
};

export default TopicList;
