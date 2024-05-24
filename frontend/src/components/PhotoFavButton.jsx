import React, { useCallback, useEffect, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({updateToFavPhotoIds, id, favorites}) {
  const selected = favorites.includes(id);

  return (
    <div className="photo-list__fav-icon" onClick={() => {updateToFavPhotoIds(id)}}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;