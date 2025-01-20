const findMatches = (wordToMatch, cities) => {
  if (wordToMatch.length === 0) return [];
  return cities.filter((place) => {
    let regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
};

export default findMatches;
