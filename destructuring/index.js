class Person{
    constructor(name, age, ...address){ // using rest operator to catch all remaining arguments in the address
        this.name = name;
        this.age = age;
        this.address = new Address(...address); // using spread to 
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
        
    }
}

const person = new Person("herlock sholmes",34,"221B Baker Street","London","England");

console.log(person);

