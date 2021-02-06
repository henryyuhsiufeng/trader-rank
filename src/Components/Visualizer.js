import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const { useEffect, useState } = React;

const useStyles = makeStyles({
  table: {
    maxWidth: "100%",
  },
});

// Dummy data
const rows = [
  {
    name: "Alex Wice",
    tag: "@AWice",
    profilePic:
      "https://pbs.twimg.com/profile_images/1335134596795486213/TZFuLKRN_400x400.png",
    traderRank: ".1",
  },
  {
    name: "CL",
    tag: "@CL207",
    profilePic:
      "https://pbs.twimg.com/profile_images/1353801757197930496/_ny4ibsr_400x400.jpg",
    traderRank: ".4",
  },
  {
    name: "Ki Young Ju 주기영",
    tag: "@ki_young_ju",
    profilePic:
      "https://pbs.twimg.com/profile_images/1206127820948279297/JlmNZDNt_400x400.jpg",
    traderRank: ".3",
  },
  {
    name: "Kyle Davies",
    tag: "@kyled116",
    profilePic:
      "https://pbs.twimg.com/profile_images/1140430023951654914/X_26kiJ9_400x400.jpg",
    traderRank: ".7",
  },
  {
    name: "Jason Choi",
    tag: "@mrjasonchoi",
    profilePic:
      "https://pbs.twimg.com/profile_images/1341094413984964608/S5v8uErO_400x400.jpg",
    traderRank: ".35",
  },
];

function Visualizer() {
  const classes = useStyles();
  // on page load sort the rankings
  useEffect(() => {
    rows.sort((a, b) => (a.traderRank < b.traderRank ? 1 : -1));
  }, []);
  return (
    <>
      <div style={{ width: "50%", display: "flex", justifyContent: "center" }}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Rank</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Top Shillers
                </TableCell>
                <TableCell style={{ fontWeight: "bold", textAlign: "center" }}>
                  Score
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {i + 1}
                  </TableCell>
                  <TableCell
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignContent: "space-between",
                    }}
                  >
                    <img
                      style={{ width: "10%", borderRadius: "50%" }}
                      src={row.profilePic}
                    />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span>{row.tag}</span>
                      <span>{row.name}</span>
                    </div>
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {row.traderRank}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Visualizer;
