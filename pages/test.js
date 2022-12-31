export const getServerSideProps = async () => {
  const res = await fetch(process.env.URL + "/api/photos");
  //   const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();

  return {
    props: { photos: data.data },
  };
};

export default function Test({ photos }) {
  console.log(photos);
  return (
    <div>
      <h1>Test</h1>
      {/* {photos.map((photo) => (
        <div key={photo.id}>
          <h3>{photo.title}</h3>
          <img src={photo.url} alt={photo.title} />
        </div>
      ))} */}
    </div>
  );
}
