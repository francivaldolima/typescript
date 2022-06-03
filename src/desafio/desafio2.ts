enum Professions{
    Actress,
    Baker,
    Developer,
    Teacher
}

type Person ={
    name: string,
    age: number,
    profession: Professions;
}

const person1: Person={
    name: "Maria",
    age: 29,
    profession: Professions.Actress
}

const person2: Person={
    name:"Roberto",
    age: 19,
    profession:Professions.Baker
}

const person3: Person={
    name: "Laura",
    age: 32,
    profession: Professions.Developer
}

const person4: Person={
    name: "Carlos",
    age: 19,
    profession: Professions.Teacher
}

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
 