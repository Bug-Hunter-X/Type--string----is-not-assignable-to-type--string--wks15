function greeter(person: string | string[]): string {
  if (Array.isArray(person)) {
    return "Hello, " + person.join(', ');
  } else {
    return "Hello, " + person;
  }
}

let user = ["Jane User", "John Smith"];

console.log(greeter(user)); //Correct
console.log(greeter("Jane User"));//Correct