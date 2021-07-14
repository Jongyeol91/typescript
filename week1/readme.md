# typescript
1일차 정리
 <hr/>

## 기본적 특성
타입스크립트는 자바스크립트의 슈퍼셋이다.   
컴파일러의 특징을 가지고 있지만 정확히는 트랜스파일러이다.   
런타임 이전에 버그를 잡아낼 수 있다. 

## 전역 설치
- npm i typescript -g

## 로컬 설치
- npm init
- npm i typescript

? npx란
- 로컬경로에 모듈이 설치되어 있으면 그것을 사용하고
- 로컬경로에 모듈이 없으면 최신버전을 불러와 설치하여 일회성으로 사용한다.

## 실행방법
- node_modules/.bin/tsc
    - npx tsc
- package.json script
    - 명령어 설정을 통해 .bin을 찾거나 npx를 안해도 됨 
- 워치 모드
    - npx tsc -w
    - 자동 컴파일된다.

## 컴파일 설정
- tsc --init 혹은 npx tsc --init
- tsconfig.json 생성됨

## 타입 어노테이션
- 변수 혹은 객체 등에 타입을 지정하는 방식






