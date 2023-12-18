// let myVar: type = value

// String

let myName: string = 'Rishabh';
myName = 'john';

// console.log(myName);

// Number

let favNumber: number = 10;

// console.log(favNumber);

// Boolean

let tsHard: boolean = true;
tsHard = false;
// console.log(tsHard);

///////////////////////////////////////////////////////////////////////////////////

// Inferring
let tech = 'TypeScript';
// tech = 12;
//err
// console.log(tech);

// Any
let color: any = 'crimson';
color = 20;
// console.log(true);

// Function parameter annotation

function addOne(num: number) {
  return num + 1;
}

const res = addOne(1);

// console.log(res);

// for arrow func

// if I don't define type it'll take Any Type
const double = (x: number, y: number) => x + y;

const res2 = double(2, 4);
// console.log(res2);

// const res3 = double(2, 4, 6); // Err

// Default param
function greet(person: string = 'anonymous') {
  console.log(person);
}
// greet();

// return annotation regular
function double1(x: number): number {
  return x + x;
}

const res4 = double1(1);
// console.log(res4);

// return annotation regular arrow func
const double2 = (x: number): number => {
  return x + x;
};

// console.log(double2(2));

function printMessage(message: string): void {
  console.log(`this is my ${message}`);
  //   return;
}

// printMessage('message');

// Never
// function throwError(msg: string): never {
//   throw new Error(msg);
// }

// function infiniteLoop(): never {
//   while (true) {}
// }

// let x: never;

// function neverReturns(): never {
//   while (true) {}
// }
// x = neverReturns();

// array
// 1;
const num: number[] = [1, 2, 3, 4];
// console.log(num);

const str: string[] = ['one', 'two,'];
// console.log(str)

const items: string[] = [];
// items.push('keyboard');
// items.push(12)

// 2; another way of making array
const items2: Array<string> = ['one', 'two'];
// console.log(items2);

// Multi-dimensional array

const singleDi: number[] = [1, 2, 3, 4];
const twoDi: number[][] = [
  [1, 2],
  [3, 4, 5],
];

const tripleDi: number[][][] = [[[23, 13, 123]]];

// console.log(singleDi);
// console.log(twoDi);
// console.log(tripleDi);

//Object
const person: { firstName: string; lastName: string; age: number } = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

// console.log(`Name: ${person.firstName} ${person.lastName} age: ${person.age}`);
// functional obj

function printUser(): { name: string; age: number; location: string } {
  return {
    name: 'Rishabh',
    age: 20,
    location: 'China',
  };
}

// const red = printUser();
// console.log(red);

// Aliases
type User = {
  name: string;
  age: number;
  location: string;
};

const printUserInfo = (user: User) => {
  return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
};

const res5 = printUserInfo({ name: 'Alex', age: 20, location: 'usa' });
// console.log(res5);

// Optional property and readonly
type Person = {
  readonly name: string;
  age: number;
  location?: string;
};

const person2: Person = {
  name: 'Rishabh',
  age: 20,
  //   location: 'China',
};

// Err
// person2.name = 'john'

// console.log(
//   `Name: ${person2.name} age: ${person2.name} location: ${person2.location}}`
// );

// Intersection types

type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetail = {
  email: string;
  password: string;
};

type User10 = UserInfo & AccountDetail;

const person10: User10 = {
  first: 'Rishabh',
  last: 'negi',
  age: 20,
  email: 'rishabhnegi@gmail.com',
  password: 'dad',
};

// console.log(
//   person10.first,
//   person10.last,
//   person10.age,
//   person10.email,
//   person10.password
// );

// Unions
let password: string | number = 20;

type UserInfo2 = {
  first: string;
  last: string;
  age: 23;
};
type AccountDetail2 = {
  email: string;
  password: string;
};

// let user: UserInfo2 | AccountDetail2 = {
//   first: 'Rishabh',
//   email: 'Rishabhnegi@gmail.com',
// };

// ERR
// const items: (number | string)[] = [1,2,4, 'hello'];

// Literal types

let colo2r: 'red' | 'crimson' | 'fusha';
colo2r = 'red';
// colo2r = 'yellow'; Err

// console.log(color);

let password2: 'secret' = 'secret';
// password2 = 'sdsdsd' ERR

// console.log(password2);

// Tuples
let myTuples: [number, string];
myTuples = [10, 'Hello world'];
// myTuples = ["Hello world", 10]; --ERR

const [first, last] = myTuples;

// console.log(myTuples);
// console.log(first, last);

const products: (number | string)[] = ['item 1', 12];
// console.log(products)

const games: [string, string, string] = ['Game 1', 'Game 2', 'Game 3'];

//Enums

enum weatherConditions {
  sunny = 'sunny',
  cloudy = 'cloudy',
  rainy = 'rainy',
  snowy = 'snowy',
}

// console.log(weatherConditions.sunny, weatherConditions.rainy);

const currentWeather = weatherConditions.snowy;
// console.log(`The current weather is ${currentWeather}`);

// Classes

class Person0 {
  public first: string;
  private last: string;
  protected age: number;

  constructor(first: string, last: string, age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  getName(): string {
    return `${this.first} ${this.last} ${this.age}`;
  }
}
let p1 = new Person0('john', 'Dow', 12);
// console.log(p1.getName());
// console.log(p1.last); - ERR

class Human extends Person0 {
  constructor(first: string, last: string, age: number) {
    super(first, last, age);
    // this.age = age;
  }
}

const rshn = new Human('Rishabh', 'Negi', 24);
// console.log(rshn);

// getter and setter

class MyClass {
  private _myProperty: number = 0;
  get myProperty(): number {
    return this._myProperty;
  }

  set myProperty(value: number) {
    this._myProperty = value;
  }
}

const myInstance = new MyClass();

// console.log(`current value: ${myInstance.myProperty}`);
myInstance.myProperty = 10;
// console.log(`current value: ${myInstance.myProperty}`);
