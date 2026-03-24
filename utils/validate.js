export function isValid(letter, name) {
  const clean = name.replace(/^(the|a)\s+/i, "");
  return clean[0]?.toUpperCase() === letter;
}