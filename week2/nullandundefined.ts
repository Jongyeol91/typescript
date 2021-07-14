let myName: string = null;
// string null check (tsconfig.json에서 설정해줘야 한다.)

// 에러남
// let u: undefined = null;

// 오로지 undefined만 넣을 수 있다.
let v: void = undefined;


// 유니온 (합집합)
let union: string | null = null;
union = "mark";
