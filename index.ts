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

// Interface

interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

const computerExample: Computer = {
  name: 'i7',
  ram: 7,
  hdd: 100,
};

// console.log(computerExample.hdd);

interface Movie {
  readonly name: string;
  ratings: number;
  genre?: string;
}

const movie1: Movie = {
  name: 'star war',
  ratings: 9,
  genre: 'action',
};

// console.log(movie1.name);

// movie1.name = "sadsaf"  ERR - readonly

interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

// console.log(add(2, 5));
// console.log(subtract(2, 5));

interface Person33 {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}

function greet33(person: Person33) {
  console.log(`hello, ${person.firstName} ${person.lastName}`);
  person.sayHello();
}

const john33: Person33 = {
  firstName: 'john',
  lastName: 'doe',
  age: 33,
  sayHello() {
    console.log('hello');
    // return 'hello';
  },
};
const justin33: Person33 = {
  firstName: 'justin',
  lastName: 'dose',
  age: 35,
  sayHello() {
    console.log('what up');
    // return 'what up';
  },
};

// greet33(john33);
// greet33(justin33);

interface Song {
  songName: string;
  singerName: string;
  printSongInfo(songName: string, singerName: string): string;
}

const song1: Song = {
  songName: 'natural',
  singerName: 'Imagine dragon',
  printSongInfo: (songName, singerName) => {
    return `Song: ${songName}, singer: ${singerName}`;
  },
};

// console.log(song1.printSongInfo('Natural', 'Imagine Dragon'));

interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenre extends MovieDetails {
  genre: string;
}

const movie4: MovieGenre = {
  name: 'star wars',
  genre: 'action',
  ratings: 8.9,
  printMovieInfo(
    name: string,
    price: number,
    ratings: number
  ): string | number {
    return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`;
  },
};

const res44 = movie4.printMovieInfo('john', 34, 8);
// console.log(res44);

interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  start(): void {
    console.log('car is starting...');
  }
  stop(): void {
    console.log('car is stopped');
  }
}

const myCar = new Car();
// myCar.start();

// Orgiginal inferface

interface Car {
  brand: string;
  start(): void;
}

// Declaration merging (interface extension)
interface Car {
  modal: string;
  stop(): void;
}

const myCarr: Car = {
  brand: 'bmw',
  modal: 'm3',
  start() {
    console.log('start');
  },
  stop() {
    console.log('stop');
  },
};

// myCarr.start();

// Generics

function printNumber(item: number, defaultValue: number): [number, number] {
  return [item, defaultValue];
}

function printString(item: string, defaultValue: string): [string, string] {
  return [item, defaultValue];
}
function printBoolean(item: any, defaultValue: any): [any, any] {
  return [item, defaultValue];
}

const num12 = printNumber(12, 20);
const str12 = printString('hello', 'world');
const bool12 = printBoolean('hello', true); // ERR
// console.log(num12);
// console.log(str12);

// GEn ^
function uniqueDataTypesFunc<T>(item: T, defaultVal: T): [T, T] {
  return [item, defaultVal];
}

// const res9 = uniqueDataTypesFunc<number>(2, 4);
// const str9 = uniqueDataTypesFunc<string>('Hello', 'Luna');
// console.log(res9);
// console.log(str9);

interface Dog66 {
  name: string;
  bread: string;
}

const dog5 = uniqueDataTypesFunc<Dog66>(
  { name: 'buddy', bread: 'labrador' },
  { name: 'Default', bread: 'unknown' }
);

// console.log(dog5);

function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randKey, value: obj[randKey] };
}

const stringObject = { a: 'apple', b: 'banana', c: 'cherry' };
const res77 = getRandomKeyValuePair<string>(stringObject);
// console.log(res77);

function filterArray<T>(array: T[], conditions: (item: T) => boolean): T[] {
  return array.filter((item) => conditions(item));
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);

// console.log(evenNumbers);

function reversePair7<T, U>(value1: T, value2: U): [U, T] {
  return [value2, value1];
}

const reversPair45 = reversePair7('hello', 20);
// console.log(reversPair45);

// ///////////////
class Box<T> {
  private content: T;

  constructor(initialContent: T) {
    this.content = initialContent;
  }

  getContent(): T {
    return this.content;
  }

  setContent(newContent: T): void {
    this.content = newContent;
  }
}

const stringBox = new Box<string>('Hello');
// console.log(stringBox.getContent());

// Type Narrowing

// type
type MyType = string | number;

function exampleFunction(value: MyType): void {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

// exampleFunction('Hello'); // hello
// exampleFunction(20); //20

class Dog45 {
  bark(): void {
    console.log('woff woff');
  }
}

class Cat45 {
  meow(): void {
    console.log('Meow');
  }
}

function animalSound(animal: Dog45 | Cat45): void {
  if (animal instanceof Dog45) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const myDoggy = new Dog45();
const mtCatty = new Cat45();

// animalSound(myDoggy);

type Employee = {
  id: number;
  name: string;
};

type Manager = {
  department: string;
  role: string;
};

type ManagerWithEmployeeInfo = Employee & Manager;

const manager: ManagerWithEmployeeInfo = {
  id: 123,
  name: 'Alex',
  department: 'Engineering',
  role: 'Team lead',
};

// console.log(manager.id);
