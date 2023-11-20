/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const updateStudent = (message) =>{
    let main = document.querySelector("main");
    main.innerHTML = markup(Student);
    console.log(message);

}



const Student = {
    name: "Joe",
    age: 30,
    courses:{
        id:1,
        courseName: "Science",
    },
    email: "joe@gmail.com",

    updateName: function(newName){
        this.name = newName;
        updateStudent("Name updated");
    },
    updateAge: function(newAge){
        this.age = newAge;
        updateStudent("Age Updated");
    },
};

const markup = (Student) =>{
    return `
    <div>
        <h2>${Student.name}</h2>
        <h3>${Student.age}</h3>
        <ul>
            <li>${Student.courses.id} ${Student.courses.courseName}</li>
            <li>${Student.email}</li>
        </ul>
    
    </div>
    `;
};


const main = document.createElement("main");
main.innerHTML = markup(Student);
document.body.appendChild(main);
