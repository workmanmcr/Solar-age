import SolarAgeCalculator from "../src/js/solaragecalculator";

describe("SolarAgeCalculator", () => {

    test("should create solar age claculator object that will calculate your age on different planets", () => {
        const solarAgeCalculator = new SolarAgeCalculator(0, 0, 0, 0, 0);
        expect(solarAgeCalculator.earthAge).toBe(0);
        expect(solarAgeCalculator.mercuryAge).toBe(0);
        expect(solarAgeCalculator.venusAge).toBe(0);
        expect(solarAgeCalculator.marsAge).toBe(0);
        expect(solarAgeCalculator.jupiterAge).toBe(0); 
    })

     test("it should calculate your age on mercury based on your age on earth", () => {
        const solarAgeCalculator = new SolarAgeCalculator();
      solarAgeCalculator.getEarthAge();
         expect(solarAgeCalculator.earthAge).toEqual(0);
 });
 });