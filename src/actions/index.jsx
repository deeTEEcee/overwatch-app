export const selectTeamIndex = (index) => {
  return {
    type: 'SELECT_TEAM_INDEX',
    selected: index
  }
};

export const selectHero = (hero) => {
  return {
    type: 'SELECT_HERO',
    hero
  }
}
