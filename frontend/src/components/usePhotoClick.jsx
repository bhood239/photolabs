import { useState } from "react";

const usePhotoClick = () => {
  const [photoSelected, setPhotoSelected] = useState(false);

  const handlePhotoClick = () => {
    setPhotoSelected(true);
    console.log("photo selected");
  }

  return {photoSelected, handlePhotoClick, setPhotoSelected};
}

export default usePhotoClick;