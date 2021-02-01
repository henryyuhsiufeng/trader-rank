import "./App.css";
import * as React from "react";
import Visualizer from "./Components/Visualizer";
import Timer from "react-compound-timer";
const { useEffect, useState } = React;

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
      <div style={{ textAlign: "center", fontWeight: "bold", marginTop: "5%" }}>
        <span>Next update in: </span>
        <Timer initialTime={timeForUpdate} direction="backward">
          {() => (
            <React.Fragment>
              <Timer.Days /> {days}
              <Timer.Hours /> {hours}
              <Timer.Minutes /> {minutes}
              <Timer.Seconds /> {seconds}
            </React.Fragment>
          )}
        </Timer>
      </div>
    </>
  );
}

export default App;
