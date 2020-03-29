import React from "react";

const OneMatch = props => {
  const match = props.match;
  const objKeys = Object.keys(match);
  const hostName = objKeys[0];
  const guestName = objKeys[1];
  const hostScore = match[hostName];
  const guestScore = match[guestName];

  return (
    <tr>
      <td>{hostName}</td>
      <td>{hostScore}</td>
      <td>{guestScore}</td>
      <td>{guestName}</td>
    </tr>
  );
};

export default OneMatch;
