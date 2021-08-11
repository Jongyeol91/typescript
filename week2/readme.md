## 1. 타입스크립트 vs 자바스크립트
- Static Types (typescript)
    - 개발 하는 중간에
- dynamic Types (javascript)
    - 런타임에

자바스크립트의 경우 런타임에 타입 체크가 되기 때문에 에러 체크 로직이 필요하다.
```js
function add(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input');
    }
    return n1 + n2;
}
```
타입스크립트의 경우 런타임 이전에 체크 되기에 에러 체크 로직이 불필요하다.
```ts
function add(n1: number, n2: number) {
    return n1 + n2
}
```
타입스트립트는 자바스크립트 기본 자료형을 포함(superset)
- ecmascript 에 따른 기본 자료형 6가지  
프로그래밍을 도울 몇가지 타입이 더 제공된다.
    - Any, Void, Never, Unknown
    - Enum
    - Tuple: object형

## 2. primitive type

- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
- 프리미티브 형의 내장 함수를 사용하는 것은 자바스크립트 처리 방식 덕분

- literal 값으로 primitive값의 서브 타입을 나타낼 수 있다.
    - true, hello, null, undefined
- 또는 primitive를 래퍼 객체로 만들 수 있다. 
- (타입은 객체가 된다. 권장하지 않는다.)
    - new Boolean(false);
    - new String('world');
    - new Number(42);


type casing
타입스크립트의 핵심 원시형 타입은 모두 소문자이다.   
이렇게가 타입을 대문자가 아니라,
```ts
 function reserve(s: String): String {
     return s.split("").reserve().join("");
 }

 reserve("hello world");
```

이렇게 소문자로 사용해야한다.
```ts
    function reverse(s: string): string { 
        return s.split("").reverse().join("");
    }
    reverse("hello world")
```

## 7. null in javascript
- null 이라는 값으로 할당된 것을 null 이라고 함.
- null 이라는 타입은 null만 가질 수 있음.
- 런타임에서 typeof 연산자를 이용하면 object

## 7. undefined in javascript
- 값을 할당하지 않은 변수는 undefined
- object의 속성이 없을때도 undefined
- 런타임에서 typeof 연산자를 이용하면 undefined

## 8. object
```js
const person1 = {name: 'mark', age: 39};
// person is not object type
// person in {name: string, age: number} type
// object literal 타입이라고 함
```

```js
const person2 = Object.create({name: "mark", age: 39});
// Object는 내장 전역 객체
// Objecr.create() 함수는 Object 타입을 넣을 수 있음
// 때문에 (o: object | null) 이렇게 유니온 타입임
// Object.creaate({}) 이렇게 null 넣어줄 수 있음 !!
```

object는타입은 원시형 타입이 아닌것들
```js
let obj: object = {};
obj = null // error
obj = true // error
obj = undefined // error
```

##  9. Array
배열안에 있는 요소들은 같은 타입
- 원래 자바스크립트에서 array는 객체
```ts
let list: number[] = [1, 2, 3];

// jsx나 tsx에서 충돌날 수 있다고 함
let list2: Array<number> = [1, 2, 3];

// 원소 유니온
let list3: (number | string)[] = [1, 2, 3, "4"];

```

## 10. tuple
- 튜플은 어레이와 다르게 원소들의 타입이 다를 수 있고 길이가 정확하다.
```ts
let x: [string, number]
x = ["hello", 39]; // ok
x = [10, "mark"]; // 에러 (순서가 안맞기에)
x[3] = "world" // 에러 (튜플은 두자리인데 왜 세번째 자리에 넣냐)
const person: [string, number] = ["mark", 39]; // ok
const [first, second, third] = person; // 에러
```

## 11. any
- any를 남용하는 것 안좋다.
- 컴파일 타임에 타입 체크가 안된다.
```ts
function returnAny(message): any {
    // message 타입 명시 하지 않으면 any로 추측된다는 에러
    console.log(message)
}
```

## 12. unknown
- 미래에 이 변수가 어떤 변수도 될 수 있음을 명시
```ts
declare const maybe: unknown;
```

## 13. never
- 어떠한 것도 리턴되지 않는 경우 
- while문도 해당
- 모든 타입의 서브타입
- 하지만 never에는 그 어떤것도 할당 할 수 없다.
```ts
function error(message: string): never {
    throw new Error(message)
}

function fail() {
    return error('failed');
}
```

## 14. void
어떤 값도 없고 타입만 있다.
일종의 undefined를 리턴할때
```ts
function returnVoid (message: string): void {
  console.log(message);
  return; // undefined만 리턴 가능함
}

returnVoid("리턴이 없다.") // 리턴된 무엇인가를 어디다 할당할 수 없다.
```


# 작성자와 사용자의 관점에서 타입 바라보기
## 타입스크립의 타입 시스템

```ts
// javascript code
function f2(a) {
    return a * 38;
}
console.log(f2('mark')); // NaN


// 타입스크립트 코드지만, any
function f3(a) {
    return a * 38;
}
console.log(f3('mark') + 5); // NaN

```
noImplicitAny 옵션을 켜면
타입을 명시적으로 지정하지 않은경우, 타입스크립트가 추론 중 'any' 라고 판단하게 되면,
컴파일 에러를 발생시켜 명시적으로 지정하도록 유도한다.

```ts
// 매개변수의 타입은 명시적으로 지정
// 명시적으로 지정하지 않은 함수의 리턴 타입은 number로 추론
function f4(a: number) {
    if(a > 0) {
        return a * 38
    }
}
// console.log(f4(5)) // 190
// console.log(f4(-5) + 5) // NaN

// 사용자는 사용법에 맞게 숫자형을 사용
// 해당 함수의 리턴 타입은 number이기 때문에, 타입에 따르면 이어진 연산을 바로 할 수 있다.
// 하지만 실제 undefined + 5가 실행되어 NaN이 출력
```
이럴때 strictNullChecks 옵션을 켜면
모든 타입에 자동으로 포합되어 있는 null과 undefined를 제거해준다..

```ts
// 명시적으로 지정하지 않은 함수의 리턴타입은 number | undefined로 추론된다.
function f4(a: number) {
    if(a > 0) {
        return a * 38
    }
}

console.log(f4(5)); // undefined
console.log(f4(-5) + 5)
// 함수의 리턴타입은 number | undefined 이기 때문에 컴파일 에러

```

```ts
// error ts2366: function lacks ending return statement and return type does not inc
// 실제 함수 구현부의 리턴 타입과 명시적으로 지정한 타입이 일치하지 않아 컴파일 에러
function f5(a: number): number {
    if (a > 0) {
        return a * 38;
    }
}
```
nonimplicitReturns 옵션을 켜면 모든 함수에서 명시적으로 리턴하지 않으면 오류
```ts
//error ts7030 not all code paths return a value
function f5(a: number): number {
if (a > 0) {
return a * 38;
}
}
```
매개변수에 오브젝트가 들어오는 경우
```ts
//error ts7030 not all code paths return a value
function f6(a) {
    return `이름은 ${a.name}이고 연령대는 ${Math.floor(a.age / 10) * 10} 입니다.`
}
console.log(f6({name: 'mark', age: 38}))
console.log(f6('mark')) // 이름은 undefined이고 연령대는 NaN입니다.

// 오브젝트 리터럴
function f7(a: {name: string, age: number}): string {
    return `이름은 ${a.name}이고 연령대는 ${Math.floor(a.age / 10) * 10} 입니다.`
}
console.log(f6('mark')) // Argument of type 'string' is not assignable to parameter of type
```
나만의 타입을 만드는 방법

```ts
interface PersonInterFace {
    name: string;
    age: number
}

type PersonTypeAlias = {
    name: string;
    age: number;
}

function f8(a: PersonInterface): string {
    ...
}
```

## structural type system (타입스크립트)
구조가 같으면 같은 타입이다.
```ts
interface IPerson {
    name: string;
    age: number;
    speak(): string;
}

type PersonType = {
    name: string;
    age: number;
    speak(): string;
}

let personInterface: IPerson = {} as any;
let personType: PersonType = {} as any;

personInterface = personType;
personType = personInterface;
```

## nominal type System (자바, 씨)
구조가 같아도 이름이 다르면 다른 타입니다.

## duck typing (파이썬)
만약 어떤 새가 오리처럼 걷고 헤엄치고 그러면 나는 그새를 오리라고 부를 것이다

## 타입 호환성
서브타입  
### 같거나 서브 타입인 경우, 할당이 가능하다. (공변)
```ts
// sub1 타입은 sup1타입의 서브타입이다.
let sub: 1 = 1;
let sup1: number = sub1;
sub1 = sup1; // error type number is not assinable to type '1'

let sub2: number[] = [1];
let sup2: object = sub2;
sub2 = sup2; // error

let sub3: [number, number] = [1, 2]; // 튜블
let sup3: number[] = sub3; // 배열
sub3 = sup3; // error number[] is not assinable to type '[number, number]'.

let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4; // ok any 타입이여서 가능 (예외적인 상황)

class Animal {};
class Dog extends Animal {
    eat() {}
}

let subDog: dog = new Dog();
let supAnimal: Animal = subDog; // ok
subDog = supAnimal; // error! Property 'eat' is missing in type 'SubAnimal' but required in tpye 'subDog'

let sub7: string = '';
let sup7: string | number = sub7;

let sub8: { a: string; b: number } = { a: '', b: 1 };
let sup8: { a: string | number; b: number } = sub8;
```

### 함수의 매개변수 타입만 같거나, 슈퍼타입인 경우, 할당이 가능하다 (반병)
```ts
class Person{}
class Developer extends Person {
    condig(){};
}

class StartupDeveloper extends Developer {
    burning() {}
}

function tellme(f: (d: Developer) => Developer) {}

// Developer => Developer 에다가 Developer => Develope를 할당하는 경우
 tellme(function dToD(d: Developer) : Developer {
     return new Developer();
 })

// strictFunctionTypes옵션 키면 에러 (함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입이 안인 경우, 에러)
// 매개변수 d가 하위타입이기 때문에
tellme(function StoD(d: StartupDveloper): Developer {
    return new Developer();
})
```

## type alias
다른 이름으로 부르기 위해 (타입 별칭)
만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것은 아님
```ts
type MyStringType = string;
const str = 'world';
let myStr: MyStringType = 'hello';
myStr = str;

type StringorNumber = string | number;
type personTuple = [string, string];
type EatType = (food: string) => void;
```

alias와 인터페이스의 차이
타입이라는 목적이 명확하면 인터페이스
별명으로만 존재하면 alias

