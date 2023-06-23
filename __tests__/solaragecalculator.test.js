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
});
