// 함수
type EatType = (food: string) => void;

interface IEat {
    (food: string): void
}

// 배열
type PersonList = string[];

interface IPersonList {
    [index: number]: string; // string이 아니라 number를 넣으면 배열로 봄
}

// intersection
interface ErrorHandling {
    success: boolean;
}

// 유니온
// 유니온 타입은 인터페이스에서 상속 받을 수 없다.
// 클래스에서도 사용 할 수 없다.

// declaration merging
// 똑같은 이름 인터페이스 선언 될 경우 합쳐짐
// html 엘리먼트를 확장하거나 추가할때 유용
// type alias에서는 불가능

interface MergingInterface {
    a: string;
}
interface MergingInterface {
    b: string
}

let mi: MergingInterface;
// mi.