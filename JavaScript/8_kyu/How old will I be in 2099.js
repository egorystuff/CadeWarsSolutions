function calculateAge(date, age) {
  if (age - date > 1) return `You are ${age - date} years old.`;

  if (age - date === 1) return `You are ${age - date} year old.`;

  if (age - date === 0) return `You were born this very year!`;

  if (date - age === 1) return `You will be born in ${date - age} year.`;

  return `You will be born in ${date - age} years.`;
}
