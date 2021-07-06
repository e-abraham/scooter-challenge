const App = require("./src/App");
const User = require("./src/User");
const Scooter = require("./src/Scooter");
const Station = require("./src/Station");

const testApp = new App();
const userA = new User("Amy", 16);

console.log(User.idCounter);
console.log(userA.loginID);
console.log(testApp.register(userA));
console.log(userA.loginID);
console.log(User.idCounter);