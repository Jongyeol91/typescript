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