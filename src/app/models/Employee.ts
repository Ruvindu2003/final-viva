export class Employee {
    id: number;
    name: string;
    adress: string;
    salary: number;
    age: number;

    constructor(id: number, name: string, adress: string, salary: number, age: number) {
        this.id = id;
        this.name = name;
        this.adress = adress;
        this.salary = salary;
        this.age = age;
    }
}