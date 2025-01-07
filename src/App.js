import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/data")
      .then((response) => response.json())
      .then((data) => setData(data.message))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
