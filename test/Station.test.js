const Station = require("../src/Station");
const Scooter = require("../src/Scooter");

describe("Station class", () => {
    const stationA = new Station();
    const stationB = new Station();
    const scooterA = new Scooter();
    
    test("new station has no scooters", () => {
        const basic = [stationA.scooters.length, stationA.broken.length];
        expect(basic).toEqual([0, 0]);
    })

    test("station id starts at 1 and increments by 1", () => {
        const ids = [stationA.id, stationB.id];
        expect(ids).toEqual([1,2]);
    })

    test("station can add scooter", () => {
        stationA.addScooter(scooterA);
        expect(scooterA.station).toBe(stationA);
        expect(stationA.scooters).toContain(scooterA);
    })

    test("station can charge scooter", () => {
        const before = scooterA.isCharged;
        stationA.chargeScooter(scooterA);
        const after = scooterA.isCharged;
        expect([before, after]).toEqual([false, true]);
    })

    test("station can remove scooter", () => {
        const before = stationA.scooters.includes(scooterA);
        stationA.removeScooter(scooterA);
        const after = stationA.scooters.includes(scooterA);
        expect([before, after]).toEqual([true, false]);
    })
})
