// complete this js code
class Person {
  constructor(name,age) {
      this._name=name;
      this._age=age;
  }
  greet(){
    return `Hello, my name is ${this._name}, I am ${this._age}years old.`
  }
}

class Employee extends Person {
  constructor(name, age,jobTitle) {
    super(name,age)
this._jobTitle=jobTitle;
  }
  jobGreet() {
    return `Hello,my name is ${this._name}, I am ${this._age} years old, and my job title is ${this._jobTitle}`
  }
}

const myPerson  = new Person("Alice", 25);
// document.getElementById("demo").innerHTML=
console.log(myPerson.greet())
const myemplow= new Employee("Bob", 30,"Manager")
//document.getElementById("demo").innerHTML=
console.log(myemplow.jobGreet())
window.Person = Person;
window.Employee = Employee;
