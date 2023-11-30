
class Student{
    #name
    #age
    #email_id
    
    constructor(name,age,email_id){
        this.#name = name;
        this.#age = age;
        this.#email_id = email_id;
    }
    get age(){
        return this.#age;
    }
    set age(newAge){
        this.#age = newAge;
    }
    get name(){
        return this.#name;
    }
    set name(newName){
        this.#name = newName;
    }
    get email_id(){
        return this.#email_id;
    }
    set email_id(newEmail){
        this.#email_id = newEmail;
    }
}

export default Student;