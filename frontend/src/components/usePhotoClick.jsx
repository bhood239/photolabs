import { useState } from "react";

const usePhotoClick = () => {
  const [photoSelected, setPhotoSelected] = useState(false);

  const handlePhotoClick = (photo) => {
    setPhotoSelected(true);
    console.log(photo);
  }

  return {photoSelected, handlePhotoClick, setPhotoSelected};
}

export default usePhotoClick;