import { useEffect, useState } from "react";

import styles from "../styles/Page.module.css";
// import Image from "next/image";
import Photo from "../components/Photo";
import Sidebar from "../components/Sidebar";
import Details from "../components/Details";

// https://drive.google.com/uc?id=1hmvoTvvjVcINg7tEks6mLvkCZ2_GnmDz

import data from "../data/photos";

export default function Feed() {
  const [dragId, setDragId] = useState();
  const [photos, setPhotos] = useState(data);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleDrag = (e) => {
    setDragId(+e.currentTarget.id);
  };

  const handleDrop = (e) => {
    const dragPhoto = photos.find((photo) => photo.id === dragId);
    const dropPhoto = photos.find((photo) => photo.id === +e.currentTarget.id);

    const dragBoxOrder = dragPhoto.order;
    const dropBoxOrder = dropPhoto.order;

    const newBoxState = photos.map((photo) => {
      if (photo.id === dragId) {
        photo.order = dropBoxOrder;
      }
      if (photo.id === +e.currentTarget.id) {
        photo.order = dragBoxOrder;
      }
      return photo;
    });

    setPhotos(newBoxState);
  };

  const handleSelectPhoto = (e) => {
    if (+e.currentTarget.id === selectedPhoto?.id) {
      setSelectedPhoto(null);
    } else {
      photos.map((photo) => {
        if (photo.id === +e.currentTarget.id) {
          // photo.selected = true;
          setSelectedPhoto(photo);
        }
      });
    }
  };

  return (
    <div className="container-feed">
      <Sidebar />

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

      <Details photo={selectedPhoto} />
    </div>
  );
}
