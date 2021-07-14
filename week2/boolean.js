"use strict";
var isDone = false;
isDone = true;
console.log(typeof isDone);
// 대문자로 한다면?
var isOK = true;
// 소문자는 primitive 대문자는 wrapper object (생정자 권장 x)
// let isNotOk: boolean = new Boolean(true);
