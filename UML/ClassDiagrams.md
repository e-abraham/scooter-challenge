Class Diagrams

class User {
    name: STRING
    age: INTEGER
    scooter: Scooter
    loginID: INTEGER
    downloadApp()
    rentScooter()
    setScooter()
    returnScooter()
    pay()
    report()
}

class Scooter {
    id: INTEGER
    charged: BOOLEAN
    station: ChargingStation
    distance: FLOAT
    setChargingStation()
}

class ChargingStation {
    id: INTEGER
    scooters: ARRAY
    broken: ARRAY
    removeScooter()
    addScooter()
    chargeScooter()
    repairScooter()
}

class ScooterApp {
    users: ARRAY
    stations: ARRAY
    registerUser()
    validateUser()
    chargeUser()
}