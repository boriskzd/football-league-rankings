import React, { useState, useEffect } from "react";
import "../App.css";
// data
import data from "../data/data.json";
// bootstrap
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
// my components
import SelectRound from "./SelectRound";
import RoundTable from "./RoundTable";
import Standings from "./Standings";

// calculate last round - round 38
const roundArray = data.map(x => x.round);
const lastRound = Math.max(...roundArray);

function App() {
  const [roundNumber, setRoundNumber] = useState(lastRound);

  useEffect(() => {
    document.title = `Round ${roundNumber} - English Premier League 2016/2017`;
  });

  function handleChange(newRound) {
    setRoundNumber(newRound);
  }

  return (
    <div className="App">
      <div className="App-header py-5 px-2 px-lg-4">
        <SelectRound roundNumber={roundNumber} onChange={handleChange} />

        <h1 className="text-center">Round {roundNumber}</h1>

        <div className="tables-container">
          <Tabs
            defaultActiveKey="matches"
            id="uncontrolled-tab-example"
            className="bg-white"
          >
            <Tab eventKey="matches" title="Matches">
              <RoundTable roundNumber={roundNumber} />
            </Tab>
            <Tab eventKey="standings" title="Standings">
              <Standings roundNumber={roundNumber} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default App;
