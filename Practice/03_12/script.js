/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

const Student = class{
    constructor(name, id, email, rollno){
        this.name = name;
        this.id = id;
        this.email = email;
        this.rollno = rollno;
    }
    updateName(newName){
        this.name = newName;
    }
}
