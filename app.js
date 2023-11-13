
class User {
    constructor (name,email,age) {
        this.name = name
        this.email = email
        this.age = age
    }

    print () {
        console.log(this);
    }

    get age () {
        return this.x
    }

    set age (age) {
        this.x = age
    }
}

const obj = new User("bhanu","gmail",21)

obj.print()