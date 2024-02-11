class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERRNAME is : ${this.username}`)
    }

    static createID(){
        return `_123`
    }
}

// const gourav = new User("Gourav")

// console.log(gourav.createID()) // static keyword terminates the accesibility of method 

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }
}

const user1 = new Teacher("Gourav", 'gourav@gmail.com', '123');
user1.logMe()