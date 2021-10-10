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
    getlogin(){                             //if we use static in static getinfo() no one can inherit it(private property)
        return "u r logged in";
    }
}
//..............................................................................................................................

//other class...thoisbcan assces all methods from user class...use EXTEND
class subadmin extends user{
    constructor(name,mail) {
        super(name,mail);
    }
    getadmin(){
        return " u are in admin";
    }
    getlogin(){                          // both havinf same method name then  child is executed
        return "u r logged in into admin";
    }
}
//...........................................................................................................................
// const rock = new user("rock","rock@gmail");
// console.log(rock.getinfo());
// rock.enrollcourse("python");
// console.log(rock.getcourse());

const stone = new subadmin("satone","stone@gmail");
console.log(stone.getadmin());
console.log(stone.getlogin());
console.log(stone.getinfo());