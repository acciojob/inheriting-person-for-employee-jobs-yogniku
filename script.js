// complete this js code

class Person {
    constructor(name,age) {
        this.pername=name;
        this.pernage=age;
    }
    jobGreet() {
      return `Hello, my name is ${this.pername}, I am ${this.pernage}years old.`
    }
  }
  
  class Employee extends Person {
    constructor(name, age,jobTitle) {
      super(name);
    this.empage=age;
	this.empjobtitle=jobTitle;
    }
    greet() {
      return `Hello,my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`
    }
  }
  
  const myPerson  = new Person("Alice",25);
 //document.getElementById("demo").innerHTML = myPerson.greet();
//const Person=new Person(Alice,25)

//const Employee=new Employee()
//Alice" and age 25
// Do not change code below this line
 window.Person = Person;
 window.Employee = Employee;
