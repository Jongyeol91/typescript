interface Person4 {
    name: string;
    age: number;
    hello(): void;
}

const p41: Person4 = {
    name: 'Mark',
    age: 39,
    hello: function (): void {
        console.log(`안녕하세요 ${this.name}`);
    }
};

const p42: Person4 = {
    name: 'Mark',
    age: 39,
    hello(this: Person4): void {
        console.log(`안녕하세요 ${this.name}`);
    }
};

// const p43: Person4 = {
//     name: 'Mark',
//     age: 39,
//     hello: (this: Person4): void => { // 화살표 함수는 렉시컬 this를 바라보기에 사용할 수 없음
//         console.log(`안녕하세요 ${this.name}`);
//     }
// };


p41.hello();
p42.hello();
