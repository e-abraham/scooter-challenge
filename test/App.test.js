const App = require("../src/App");
const User = require("../src/User");
const Station = require("../src/Station");
const Scooter = require("../src/Scooter");

describe("App class", () => {
    const testApp = new App();
    const userA = new User("Jen", 27);
    const userB = new User("Grace", 20);
    const userC = new User("Ken", 17);
    const scooterA = new Scooter();

    test("app starts with no users or stations", () => {
        const basic = [App.users.length, App.stations.length];
        expect(basic).toEqual([0, 0]);
    })

    test("new stations are automatically added to app", () => {
        const stationA = new Station();
        const stationB = new Station();
        expect(App.stations).toContain(stationA);
        expect(App.stations).toContain(stationB);
    })

    test("app can register user", () => {
        testApp.register(userA);
        expect(userA.loginID).toBe(User.idCounter - 1);
        expect(App.users).toContain(userA);
    })

    test("app can validate user", () => {
        const loginID = userA.loginID;
        const testValue = App.validateUser(loginID);
        expect(testValue).toBe(true);
    })

    test("app won't validate unregistered or underage user", () => {
        testApp.register(userC);
        const loginIDs = [userB.loginID, userC.loginID];
        const testB = App.validateUser(loginIDs[0]);
        const testC = App.validateUser(loginIDs[1]);
        expect([testB, testC]).toEqual([false, false]);
    })

    test("app will check if scooter can be rented", () => {
        const stationA = new Station();
        stationA.addScooter(scooterA);
        stationA.chargeScooter(scooterA);
        const checkReturn = App.checkScooter(scooterA);
        expect(checkReturn).toBe(true);
    })

})