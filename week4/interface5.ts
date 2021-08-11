interface IPerson1 {
    name: string;
    age?: number;
    hello(): void;
}

// 클래스에서 인터페이스를 사용
class Person implements IPerson1 {
    name: string;
    age?: number | undefined;

    constructor(name: string) {
        this.name = name;
    }

    hello(): void {
        console.log(`안녕하세요 ${this.name} 입니다.`)
    }
}

// 인터페이스를 만족해야 하는 인스턴스가 탄생
const person: IPerson1 = new Person('jongyeol');
person.hello();