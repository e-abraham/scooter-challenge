const User = require("../src/User");
const Scooter = require("../src/Scooter");
const Station = require("../src/Station");


describe("User class", () => {
    const userA = new User("Jen", 27);
    const scooterA = new Scooter();
    const stationA = new Station();

    test("user has name and age", () => {
        const basic = [userA.name, userA.age];
        expect(basic).toEqual(["Jen", 27]);
    })

    test("user can download app", () => {
        expect(userA.download()).toBe("Download complete, please complete registration to view and rent scooters");
    })

    test("user can be assigned scooter", () => {
        userA.setScooter(scooterA);
        expect(userA).toHaveProperty("scooter", scooterA);
    })

    // test("user can rent rent scooter from station", () => {
    //     userA.rentScooter(scooterA);

    // })
})