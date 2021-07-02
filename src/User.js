class User{
    static idCounter = 0;
    
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.scooter;
        this.loginID;
    }

    download(){
        return "Download complete, please complete registration to view and rent scooters";
    }

    setScooter(scooter){
        this.scooter = scooter;
    }
}



module.exports = User;