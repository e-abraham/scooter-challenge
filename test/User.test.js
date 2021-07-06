const User = require("../src/User");
const Scooter = require("../src/Scooter");
const Station = require("../src/Station");
const App = require("../src/App");


describe("User class", () => {
    const userA = new User("Jen", 27);
    const userB = new User("Ben", 22);
    const testApp = new App();
    const scooterA = new Scooter();
    const scooterB = new Scooter();
    const stationA = new Station();

    test("user has name and age", () => {
        const basic = [userA.name, userA.age];
        expect(basic).toEqual(["Jen", 27]);
    })

    test("user can download app", () => {
        expect(userA.download()).toBe("Download complete, please complete registration to view and rent scooters");
    })

    test("user can report scooter", ()=> {
        stationA.addScooter(scooterB)
        const checkReturn = userA.report(scooterB);
        expect(checkReturn).toBe("Thank you for reporting, the scooter has been set aside for repair.");
    })
    
    test("user can rent a scooter", () => {
        // console.log(testApp.register(userA));
        testApp.register(userA);
        userA.loginID = User.idCounter;
        User.idCounter++;
        // console.log("login id " + userA.loginID + " , User counter " + User.idCounter);
        // console.log(App.users);
        stationA.addScooter(scooterA);
        stationA.chargeScooter(scooterA);
        userA.rentScooter(scooterA);
        expect(userA).toHaveProperty("scooter", scooterA);
    })

    test("user can return scooter", () => {
        scooterA.rideScooter(5);
        const checkReturn = userA.returnScooter(scooterA, stationA);
        expect(checkReturn).toBe("Thank you for your payment of $52 for your 5 hour scooter rental.");
    })
})