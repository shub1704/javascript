class user{
    constructor(name,mail,cr) {
        this.name = name;
        this.email = mail;
        this.cr = cr;
    }
    #course = []; //if we have to access it throughout the class jusrt put #
    getinfo() {
        console.log(`the name is ${this.name} the email.is  ${this.email}`);
    }
    enrollcourse(cr){
        this.#course.push(cr);
    }
    getcourse(){
        return this.#course;
    }
}

module.exports = user;

//GETTER 
//which is used to grab objects from the class
//above gerinfo is a getter

//SETTER
//which are used to set data in the classs enrollcourses is a setter

const rock = new user("rock","rock@gmail");
console.log(rock.getinfo());
rock.enrollcourse("python");
console.log(rock.getcourse());
