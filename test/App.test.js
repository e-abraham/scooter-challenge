const App = require("../src/App");
const User = require("../src/User");

describe("App class", () => {
    const testApp = new App();
    const userA = new User("Jen", 27);

    test("app starts with no users or stations", () => {
        const basic = [App.users.length, App.stations.length];
        expect(basic).toEqual([0, 0]);
    })

    test("app can register user", () => {
        testApp.register(userA);
        expect(userA.loginID).toBe(User.idCounter - 1);
        expect(App.users).toContain(userA);
    })

    test("app can validate user", () => {
        testApp.register(userA);
        const loginID = userA.loginID;
        const testValue = testApp.validateUser(loginID);
        expect(testValue).toBe(true);
    })

    test("app won't ", () => {

    })

})