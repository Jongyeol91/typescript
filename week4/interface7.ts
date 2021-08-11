interface HelloPerson {
    (name: string, age?: number): void;
}

// age에 물음표를 지우면 에러가 발생한다.
const helloPerson: HelloPerson = function (name: string, age: number) {
    console.log(`안녕하세요 ${name} 입니다.`);
};

helloPerson('mark', 39);