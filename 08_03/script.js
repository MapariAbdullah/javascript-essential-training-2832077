/**
 * A standard function
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */


import Student from "./Student.js";

const Stud = new Student();
Stud.name = "Abd";
Stud.age = 12;
Stud.email_id = "yo@gmail.com"

console.log(Stud);

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
};

const addPack = function (currentPack) {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
      <li>Volume: ${currentPack.volume}</li>
      <li>Color: ${currentPack.color}</li>
      <li>Number of pockets: ${currentPack.pocketNum}</li>
    </ul>
  `;
  return newArticle;
};

const addStudent = function(newStudent){
  const newStud = document.createElement("article")
  newStud.innerHTML=
  `
  <h1>Name: ${newStudent.name}</h1>
  <ul>
      <li>Age: ${newStudent.age}</li>
      <li>Email Id: ${newStudent.email_id}</li>
  </ul>
  `
  return newStud;
}

const main = document.querySelector("main");
main.append(addPack(greenPack));
main.append(addStudent(Stud));
