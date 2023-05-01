// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

let goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) =>
	laLigaGoals + copaDelReyGoals + championsLeagueGoals;

let value = goals(43, 10, 5);

console.log(value);
