import { useState } from "react";

const usePhotoClick = () => {
  const [photoSelected, setPhotoSelected] = useState(null);

  const handlePhotoClick = (photo) => {
    setPhotoSelected(photo);
    console.log(photo);
  }

  return {photoSelected, handlePhotoClick, setPhotoSelected};
}

export default usePhotoClick;