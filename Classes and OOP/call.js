
function SetUserName(username){
    // Complex DB Calls
    this.username = username;
    console.log('Called')
}

function CreateUsers(username, email, password){
    SetUserName.call(this,username)
    this.email = email;
    this.password = password;
}

const user = new CreateUsers("Gourav", 'gouravmalviya445@gmail.com', '1289')
console.log(user)


// namste java script
let name = {
    firstName: "Gourav",
    lastName: "Malviya",
    printFullName: function(){
        console.log(`My full name is ${this.firstName} ${this.lastName}`)
    }
}

let name2 = {
    firstName: "Sachin",
    lastName: "Tandulkar",
}

// call method : function Borrowing
// name.printFullName.call(name2)
