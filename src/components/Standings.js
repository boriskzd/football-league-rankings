import React from "react";
// data
import data from "../data/data.json";
// bootstrap
import Table from "react-bootstrap/Table";
// my components
import OneClub from "./OneClub";

function Standings(props) {
  // 1. find all clubs from first round of matches
  // 2. push scores, points and data from all matches to array of clubs
  // 3. calculate ranking
  // 4. sort by rankings

  // 1. find all clubs and put them in array
  const firstRound = data[0].matches;
  const allClubs = [];

  firstRound.forEach(match => {
    // both clubs from one match
    const twoClubs = Object.keys(match);
    twoClubs.forEach(el => {
      const club = {
        ranking: 0,
        name: el,
        wins: 0,
        draws: 0,
        loses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        matchesPlayed() {
          return this.wins + this.draws + this.loses;
        },
        goalsDifference() {
          return this.goalsFor - this.goalsAgainst;
        },
        points() {
          return this.wins * 3 + this.draws;
        },
        lastFive: []
      };

      allClubs.push(club);
    });
  });

  // 2. push scores, points and data from all matches to array of clubs
  let i;
  for (i = 0; i < props.roundNumber; i++) {
    data[i].matches.forEach(match => {
      const objKeys = Object.keys(match);
      const hostName = objKeys[0];
      const guestName = objKeys[1];
      const hostScore = match[hostName];
      const guestScore = match[guestName];

      allClubs.forEach(el => {
        if (el.name === hostName) {
          el.goalsFor += hostScore;
          el.goalsAgainst += guestScore;

          if (hostScore > guestScore) {
            el.wins++;
            el.lastFive.push("W");
          } else if (hostScore < guestScore) {
            el.loses++;
            el.lastFive.push("L");
          } else {
            el.draws++;
            el.lastFive.push("D");
          }
          if (el.lastFive && el.lastFive.length > 5) el.lastFive.shift();
        } else if (el.name === guestName) {
          el.goalsFor += guestScore;
          el.goalsAgainst += hostScore;

          if (hostScore > guestScore) {
            el.loses++;
            el.lastFive.push("L");
          } else if (hostScore < guestScore) {
            el.wins++;
            el.lastFive.push("W");
          } else {
            el.draws++;
            el.lastFive.push("D");
          }
          if (el.lastFive && el.lastFive.length > 5) el.lastFive.shift();
        }
      });
    });
  }

  // 3. Calculate ranking
  allClubs.sort(function(a, b) {
    // sort by points
    if (b.points() - a.points() !== 0) {
      return b.points() - a.points();
      // if same points, sort by goal difference
    } else if (b.goalsDifference() - a.goalsDifference() !== 0) {
      return b.goalsDifference() - a.goalsDifference();
      // if same goal difference, sort by more scored goals
    } else {
      return b.goalsFor - a.goalsFor;
    }
  });

  // 4. add ranking number
  allClubs.forEach((club, i) => {
    club.ranking = i + 1;
  });

  return (
    <div>
      <Table bordered hover size="sm" responsive className="standings-table">
        <thead>
          <tr>
            <th title="Position">Pos.</th>
            <th title="Club">Club</th>
            <th title="Matches Played">MP</th>
            <th title="Win">W</th>
            <th title="Draw">D</th>
            <th title="Lose">L</th>
            <th title="Goals For">GF</th>
            <th title="Goals Against">GA</th>
            <th title="Goals Difference">GD</th>
            <th title="Points">Pts</th>
            <th title="Last 5 Matches">Last 5</th>
          </tr>
        </thead>
        <tbody>
          {allClubs.map((club, i) => {
            return <OneClub key={i} club={club} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Standings;
