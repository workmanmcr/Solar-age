import SolarAgeCalculator from "../src/js/solaragecalculator";

describe("SolarAgeCalculator", () => {

    test("should create solar age claculator object that will calculate your age on different planets", () => {
        const solarAgeCalculator = new SolarAgeCalculator(1);
        expect(solarAgeCalculator.earthAge).toBe(1);
        expect(solarAgeCalculator.mercuryAge).toBe(0.24);
        expect(solarAgeCalculator.venusAge).toBe(0.62);
        expect(solarAgeCalculator.marsAge).toBe(1.88);
        expect(solarAgeCalculator.jupiterAge).toBe(11.86); 
    })
    test("should return the years passed on each planet since a past birthday", () => {
        const ageCalculator = new SolarAgeCalculator(56);
        const yearsPassed = ageCalculator.getYearsPassedSincePastBirthday(43);
        expect(yearsPassed.earthYears).toEqual(13);
        expect(yearsPassed.mercuryYears).toEqual(13 * 0.24);
        expect(yearsPassed.venusYears).toEqual(13 * 0.62);
        expect(yearsPassed.marsYears).toEqual(13 * 1.88);
        expect(yearsPassed.jupiterYears).toEqual(13 * 11.86);
      });
    });
  