export default class SolarAgeCalculator {
  constructor(baseEarthAge) {
    this.earthAge = baseEarthAge;
    this.mercuryAge = this.earthAge * 0.24;
    this.venusAge = this.earthAge * 0.62;
    this.marsAge = this.earthAge * 1.88;
    this.jupiterAge = this.earthAge * 11.86;
  }
getYearsPassedSincePastBirthday(pastBirthdayAge) {
  const earthYearsPassed = this.earthAge - pastBirthdayAge;
  const mercuryYearsPassed = earthYearsPassed * 0.24;
  const venusYearsPassed = earthYearsPassed * 0.62;
  const marsYearsPassed = earthYearsPassed * 1.88;
  const jupiterYearsPassed = earthYearsPassed * 11.86;
  return {
    earthYears: earthYearsPassed,
    mercuryYears: mercuryYearsPassed,
    venusYears: venusYearsPassed,
    marsYears: marsYearsPassed,
    jupiterYears: jupiterYearsPassed
  };
}
getYearsToFutureBirthday(futureBirthdayAge) {
  const earthYearsToFutureBirthday = futureBirthdayAge - this.earthAge;
  const mercuryYearsToFutureBirthday = earthYearsToFutureBirthday * 0.24;
  const venusYearsToFutureBirthday = earthYearsToFutureBirthday * 0.62;
  const marsYearsToFutureBirthday = earthYearsToFutureBirthday * 1.88;
  const jupiterYearsToFutureBirthday = earthYearsToFutureBirthday * 11.86;
  return {
      earthYears: earthYearsToFutureBirthday,
      mercuryYears: mercuryYearsToFutureBirthday,
      venusYears: venusYearsToFutureBirthday,
      marsYears: marsYearsToFutureBirthday,
      jupiterYears: jupiterYearsToFutureBirthday

    }
  } 
};