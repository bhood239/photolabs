import React, { useEffect } from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ onLoadTopic, loadedTopics }) => {
  useEffect(() => {
    onLoadTopic();
  }, []);

  return (
    <div className="top-nav-bar__topic-list">
        {loadedTopics.map((data) => (
          <div key={data.id}>
            <TopicListItem data={data} />
          </div>
        ))}
    </div>
  );
};

export default TopicList;
