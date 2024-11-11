// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(s) {
  const guests = s.split(";").map((guest) => {
    const [name, surname] = guest.split(":");
    return { name, surname };
  });

  // Sort the array of objects by surname and then by name
  guests.sort((a, b) => {
    if (a.surname.toUpperCase() === b.surname.toUpperCase()) {
      return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
    } else {
      return a.surname.toUpperCase().localeCompare(b.surname.toUpperCase());
    }
  });

  // Format the output string
  return guests.map((guest) => `(${guest.surname.toUpperCase()}, ${guest.name.toUpperCase()})`).join("");
}

console.log(
  meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"),
);
