import SolarAgeCalculator from './../src/js/solarage';

describe("SolarAgeCalculator", () => {

    test("should calculate age in Earth years", () => {
        const earthYears = new SolarAgeCalculator();
        expect(earthYears.earthAge).toBe(0);
    })
})