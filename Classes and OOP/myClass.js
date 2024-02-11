// ES6

function SetUsername(username){
    this.username = username
}

class user{
    constructor(username, email, password){
        SetUsername.call(this,username)
        this.email = email
        this.password = password
    }

    encriptPassword(){
        return `${this.password}@xyz`
    }
}

const userOne = new user("Gourav", 'gouravmalviya445@gmail.com', 432)
console.log(userOne.encriptPassword())



// Behind the Scence
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password; 
    return this;
}

User.prototype.encriptPassword = function(){
    return `${this.password}@xyx`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

let user1 = new User("Gourav", 'gouravmalviya445@gmial.com', 998);
console.log(user1.encriptPassword())
console.log(user1.changeUsername())
