import Sidebar from "../components/Sidebar";

export default function Hashtag() {
  const handleRequest = async () => {
    fetch("/api/photos", {
      method: "POST",
      body: JSON.stringify({ urla: "test" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <div className="container-feed">
        <Sidebar />
        <div>
          <p>hashtags</p>
          <button onClick={handleRequest}>Create</button>
        </div>
      </div>
    </>
  );
}
