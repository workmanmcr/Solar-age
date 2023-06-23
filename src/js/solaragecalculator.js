export default class SolarAgeCalculator {
  constructor(baseEarthAge) {
    this.earthAge = baseEarthAge;
    this.mercuryAge = this.earthAge * 0.24;
    this.venusAge = this.earthAge * 0.62;
    this.marsAge = this.earthAge * 1.88;
    this.jupiterAge = this.earthAge * 11.86;
  }
getYearsPassedSincePastBirthday() {


}
};