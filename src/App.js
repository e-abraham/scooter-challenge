const User = require("./User");

class App {
    static users = [];
    static stations = [];
    
    constructor(){
        
    }
        
    register(user){
        if(typeof(user.loginID) == "number"){
            return "User is already registered.";
        } else if(typeof(user.loginID) == "undefined"){
            user.loginID = User.idCounter;
            App.users.push(user);
            User.idCounter++;
            return "Registered with loginID: " + user.loginID + " , idCounter now: " + User.idCounter;
        }

        
    }

    static validateUser(loginID){
        const found = App.users.find(user => user.loginID === loginID);
        
        if(!found){
            return false;
        }

        const age = found.age;

        if(age >= 18){
            return true;
        } else if(age < 18){
            return false;
        }
    }

    static checkScooter(scooter){
        const station = scooter.station;

        if(!App.stations.includes(station) || station.broken.includes(scooter)){
            return "Scooter not available to rent, please choose a different scooter.";
        }

        if(scooter.isCharged === false){
            return "Insufficient scooter battery, please choose a different scooter";
        }

        return true;
    }
}

module.exports = App;