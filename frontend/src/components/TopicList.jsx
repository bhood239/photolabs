import React, { useEffect } from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ onLoadTopic, topics }) => {
  useEffect(() => {
    onLoadTopic();
  }, [onLoadTopic]);

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
