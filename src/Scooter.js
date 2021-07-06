class Scooter {
    static idCounter = 1;
    
    constructor(){
        this.id = Scooter.idCounter;
        this.isCharged = false;
        this.station;
        this.distance = Math.floor(Math.random() * 32);
        this.rideTime;

        Scooter.idCounter++;
    }

    setStation(station){
        this.station = station;
    }
    
    setCharged(boolean){
        this.isCharged = boolean;
    }

    rideScooter(time){
        this.rideTime = 0;
        while (this.rideTime < time){
            if(this.distance === 32){
                this.setCharged(false);
                return "Scooter battery has run out, please return scooter to a charging station.";
            }
            this.distance++
            this.rideTime++
        }
        return "Your rental period has ended, time to return scooter to a charging station.";
    }
}

module.exports = Scooter;