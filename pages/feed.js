import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Details from "../components/Details";
import Photos from "../components/Photos";

// https://drive.google.com/uc?id=1hmvoTvvjVcINg7tEks6mLvkCZ2_GnmDz

export default function Feed({ data }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  console.log(data);

  return (
    <div className="container-feed">
      <Sidebar />

      <Photos
        select={setSelectedPhoto}
        selectedPhoto={selectedPhoto}
        data={data}
      />

      <Details photo={selectedPhoto} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(process.env.URL + "/api/photos");
  const data = await res.json();

  return {
    // props: { photos: datas.data },
    props: { data: data.data },
  };
};
