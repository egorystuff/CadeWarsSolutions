// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)

function points(games) {
  let points = 0;

  for (let i = 0; i < games.length; i++) {
    const [x, y] = games[i].split(":");
    points += x > y ? 3 : x < y ? 0 : 1;
  }

  return points;
}
