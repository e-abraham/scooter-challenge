const Scooter = require("../src/Scooter");
const Station = require("../src/Station");

describe("Scooter class", () => {
    const scooterA = new Scooter();
    const scooterB = new Scooter();
    const stationA = new Station();

    test("new scooter has no charge", () => {
        expect(scooterA.isCharged).toBe(false);
    })

    test("scooter id starts at 1 and increments by 1", () => {
        const ids = [scooterA.id, scooterB.id];
        expect(ids).toEqual([1,2]);
    })

    test("Scooter can be ridden while it has battery and time", () => {
        stationA.addScooter(scooterA);
        stationA.chargeScooter(scooterA);
        scooterA.distance = 28;
        const tracker = [28];
        scooterA.rideScooter(2);
        tracker.push(scooterA.distance);
        scooterA.rideScooter(5);
        tracker.push(scooterA.distance);
        expect(tracker).toEqual([28, 30, 32]);
    })

    test("Scooter can't be ridden after time runs out", () => {
        stationA.addScooter(scooterA);
        stationA.chargeScooter(scooterA);
        scooterA.distance = 12;
        const tracker = [12];
        scooterA.rideScooter(3);
        tracker.push(scooterA.distance);
        expect(tracker).toEqual([12, 15]);
    })
})