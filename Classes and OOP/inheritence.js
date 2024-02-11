
// Inheritance

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME IS : ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new Course is added by ${this.username}`)
    }
}

let user1 = new Teacher("Gourav",'gouav@gmail.com', '123')

user1.logMe()
user1.addCourse()

let userName = new User("Ayushi")
userName.logMe()
