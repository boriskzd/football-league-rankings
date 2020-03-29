import React from "react";
// data
import data from "../data/data.json";
// bootstrap
import Table from "react-bootstrap/Table";
// my components
import OneMatch from "./OneMatch";

function RoundTable(props) {
  const round = data[props.roundNumber - 1];

  return (
    <Table bordered hover size="sm" responsive className="round-table">
      <thead>
        <tr>
          <th>Host</th>
          <th>Host goal</th>
          <th>Guest Goals</th>
          <th>Guest</th>
        </tr>
      </thead>
      <tbody>
        {round.matches.map((match, i) => {
          return <OneMatch key={i} match={match} />;
        })}
      </tbody>
    </Table>
  );
}

export default RoundTable;
