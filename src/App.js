const User = require("./User");

class App {
    static users = [];
    static stations = [];
    
    constructor(){
        
    }

    register(user){
        user.loginID = User.idCounter;
        App.users.push(user);
        User.idCounter++
    }

    validateUser(loginID){
        const found = App.users.find(user => user.loginID === loginID);
        const age = found.age;
        if(!found){
            return false;
        }

        if(age >= 18){
            return true;
        } else if(age < 18){
            return false;
        }
    }
}

module.exports = App;