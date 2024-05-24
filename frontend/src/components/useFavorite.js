const { useState } = require("react");

const useFavorite = () => {
  const [favorites, setFavorites] = useState([]);

  const handleFav = (id) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter(favId => favId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  }

  return {favorites, handleFav, setFavorites};
}

export default useFavorite;

