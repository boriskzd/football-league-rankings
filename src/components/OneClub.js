import React from "react";

const OneClub = props => {
  return (
    <tr>
      <td>{props.club.ranking}.</td>
      <td className="text-left px-2">{props.club.name}</td>
      <td>{props.club.matchesPlayed()}</td>
      <td>{props.club.wins}</td>
      <td>{props.club.draws}</td>
      <td>{props.club.loses}</td>
      <td>{props.club.goalsFor}</td>
      <td>{props.club.goalsAgainst}</td>
      <td>{props.club.goalsDifference()}</td>
      <td>{props.club.points()}</td>
      <td className="last-5" title="Last match played is left">
        {/* .reverse() is called to show latest games on the left */}
        {props.club.lastFive.reverse().map((el, i) => {
          return (
            <span key={i} className={`game-icon game-${el}`}>
              {el}
            </span>
          );
        })}
      </td>
    </tr>
  );
};

export default OneClub;
