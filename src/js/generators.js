export function characterGenerator(allowedTypes, maxLevel) {
  const charRandom = Math.floor(Math.random() * allowedTypes.length);
  const playerChar = new window[allowedTypes[charRandom]](
    Math.floor(Math.random() * (maxLevel - 1) + 1)
  );
  return playerChar;
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const team =[];
  for (i = 0; i < characterCount; i++) {
    const char = characterCount(allowedTypes, maxLevel);
    team.push(char);
  }
  return team;
}
