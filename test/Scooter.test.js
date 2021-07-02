const Scooter = require("../src/Scooter");

describe("Scooter class", () => {
    const scooterA = new Scooter();
    const scooterB = new Scooter();
    
    test("new scooter has no charge or distance", () => {
        const basic = [scooterA.isCharged, scooterA.distance];
        expect(basic).toEqual([false, 0]);
    })

    test("scooter id starts at 1 and increments by 1", () => {
        const ids = [scooterA.id, scooterB.id];
        expect(ids).toEqual([1,2]);
    })
})