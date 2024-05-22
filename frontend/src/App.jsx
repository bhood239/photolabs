import React from 'react';

import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import TopicList from 'components/TopicList';
import PhotoList from 'components/PhotoList';


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} />
    </div>
  );
};

export default App;
