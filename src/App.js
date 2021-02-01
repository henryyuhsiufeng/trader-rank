import "./App.css";
import * as React from "react";
import Visualizer from "./Components/Visualizer";
const { useEffect, useState } = React;

// for the future
const fetchData = async () => {
  return await fetch("")
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

function App() {
  const [data, setData] = useState();
  const [timeForUpdate, setTimeForUpdate] = useState(55000000);
  const days = "days ";
  const hours = "hours ";
  const minutes = "minutes ";
  const seconds = "seconds ";

  useEffect(() => {
    setData(fetchData());
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Top Traders</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Visualizer />
      </div>
    </>
  );
}

export default App;
