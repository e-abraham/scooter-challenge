class Station {
    static idCounter = 1;

    constructor() {
        this.id = Station.idCounter;
        this.scooters = [];
        this.broken = [];

        Station.idCounter++;
    }

    addScooter(scooter){
        scooter.setStation(this);
        this.scooters.push(scooter);
    }

    chargeScooter(scooter){
        if(!this.scooters.includes(scooter)){
            return "Cannot find scooter at charging station.";
        }

        if(scooter.isCharged === false) {
            scooter.setCharged(true);
        } else if (scooter.isCharged === true) {
            return "Scooter is already fully charged"
        }
    }

    removeScooter(scooter){
        scooter.setStation("");
        const index = this.scooters.indexOf(scooter);
        this.scooters.splice(index, 1);
    }


}



module.exports = Station;