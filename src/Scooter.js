class Scooter {
    static idCounter = 1;
    
    constructor(){
        this.id = Scooter.idCounter;
        this.isCharged = false;
        this.station = ""
        this.distance = Math.floor(Math.random() * 32);

        Scooter.idCounter++;
    }

    setStation(station){
        this.station = station;
    }
    
    setCharged(boolean){
        this.isCharged = boolean;
    }

    rentScooter(time){
        let rideTime = 0;
        while (rideTime < time){
            if(distance === 32){
                return "Scooter battery has run out, time to return scooter to a charing station."
            }
            this.distance++
            rideTime++
        }
        return "Your rental period has ended, please return scooter to a charing station";
    }
}

module.exports = Scooter;