const { users } = require("./App");
const App = require("./App");

class User{
    static idCounter = 1;
    
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.scooter;
        this.loginID;
    }

    download(){
        return "Download complete, please complete registration to view and rent scooters";
    }

    report(scooter){
        const station = scooter.station;
        if(this.scooter != scooter && !App.stations.includes(station)){
            return "Users can report a broken scooter in their possession or at a charging station."
        }

        if(this.scooter != scooter && station.scooters.includes(scooter)){
            const index = station.scooters.indexOf(scooter);
            station.scooters.splice(index, 1);
            station.broken.push(scooter);
            return "Thank you for reporting, the scooter has been set aside for repair.";
        }

        if(this.scooter === scooter){
            return "Please return scooter to the nearest charging station and report broken.";
        }
    }
    
    setScooter(scooter){
        this.scooter = scooter;
    }

    rentScooter(scooter){
        const loginID = this.loginID;
        const validUser = App.validateUser(loginID);
        const canRent = App.checkScooter(scooter);
        const station = scooter.station;

        if(validUser === false){
            return "Users must be registered and at least 18 years old to rent a scooter.";
        }

        if(canRent != true){
            return canRent;
        }

        station.removeScooter(scooter);
        this.setScooter(scooter);
        return "Enjoy your scooter!";

    }

    returnScooter(scooter, station){
        const rideTime = scooter.rideTime;
        
        if(this.scooter != scooter){
            return "Scooter not in your possession"
        }

        this.setScooter("");
        scooter.rideTime = 0;
        station.addScooter(scooter);
        return this.pay(rideTime);
    }

    pay(rideTime){
        const fee = 2;
        const hourlyRate = 10;
        const total = fee + (rideTime * hourlyRate);
        
        if(rideTime > 0){
            return "Thank you for your payment of $" + total + " for your " + rideTime + " hour scooter rental."
        }
        
    }
}



module.exports = User;