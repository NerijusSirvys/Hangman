import { useEffect, useState } from "react";
import { history } from "../..";
import { engine } from "../../app/services/engine";
import { LeaderboardEntry } from "../../interfaces/LeaderboardEntry";

export const Leaderboard = () => {
  const [records, setRecords] = useState<LeaderboardEntry[]>([]);
  useEffect(() => {
    engine.getLeaderboard().then((response) => {
      setRecords(response);
    });
  }, []);

  console.log(records);
  return (
    <div className="leaderboard">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Username</th>
              <th>Game Score</th>
            </tr>
          </thead>
          <tbody>
            {records.map((row, index) => {
              return (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td>{row.username}</td>
                  <td>{row.gameScore}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p onClick={() => history.goBack()} className="button">
          Back
        </p>
      </div>
    </div>
  );
};
