// import Image from "next/image";
// import Image from "next/image";
// import Image from "next/image";
// import Image from "next/image";
// import Image from "next/image";

export default function Photo({
  src,
  alt,
  id,
  handleDrag,
  handleDrop,
  onClick,
  selected,
}) {
  return (
    <div
      className={`photo ${selected ? "selected" : ""}`}
      draggable={true}
      onDragOver={(e) => e.preventDefault()}
      id={id}
      onDragStart={handleDrag}
      onDrop={handleDrop}
      onClick={onClick}
    >
      <img src={src} alt={alt} />
    </div>

    // <Image
    //   src={photo.url}
    //   alt={photo.title}
    //   key={photo.id}
    //   layout="fill"
    // />
  );
}
