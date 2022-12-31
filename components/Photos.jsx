import { useEffect, useState } from "react";
import Photo from "../components/Photo";

import testData from "../data/photos";

export default function Photos({ select, selectedPhoto, data }) {
  // const [photos, setPhotos] = useState(data);
  const [photos, setPhotos] = useState(
    data.map((photo) => {
      photo.id = photo._id;
      return photo;
    })
  );
  const [dragId, setDragId] = useState();

  const handleDrag = (e) => {
    setDragId(e.currentTarget.id);
  };

  const handleDrop = (e) => {
    console.log(dragId);
    console.log(e.currentTarget.id);
    const dragPhoto = photos.find((photo) => photo.id === dragId);
    const dropPhoto = photos.find((photo) => photo.id === e.currentTarget.id);

    const dragBoxOrder = dragPhoto.order;
    const dropBoxOrder = dropPhoto.order;

    const newBoxState = photos.map((photo) => {
      if (photo.id === dragId) {
        photo.order = dropBoxOrder;
      }
      if (photo.id === e.currentTarget.id) {
        photo.order = dragBoxOrder;
      }
      return photo;
    });

    setPhotos(newBoxState);
  };

  const handleSelectPhoto = (e) => {
    if (e.currentTarget.id === selectedPhoto?.id) {
      select(null);
    } else {
      photos.map((photo) => {
        if (photo.id === e.currentTarget.id) {
          select(photo);
        }
      });
    }
  };

  return (
    <div>
      <div className="photos-container">
        {photos
          .sort((a, b) => a.order - b.order)
          .map((photo) => (
            <Photo
              key={photo.id}
              src={photo.url}
              alt={photo.title}
              id={photo.id}
              handleDrag={handleDrag}
              handleDrop={handleDrop}
              onClick={handleSelectPhoto}
              selected={selectedPhoto?.id === photo.id}
            />
          ))}
      </div>
    </div>
  );
}
