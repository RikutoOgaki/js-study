/*
drill02 - 配列
配列 arr を作成し、以下の出力になる様にデータを変更すること

[表示内容]
[]
[200]
[200,300]
[300]
*/

// let array = [200,300] ;
// console.log("[]");

// console.log(`[${array[0]}]`);

// console.log(`[${array}]`);

// console.log(`[${array[1]}]`);

let array = []
console.log(array);

array.push(200)
console.log(array);

array.push(300);
console.log(array);

array.shift(200);
console.log(array);
