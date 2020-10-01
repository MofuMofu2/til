// a
let i: 3 = 3;
i = 4; // iはnumberではなく、「3」という特定のnumberであると宣言したから

// b
let j = [1, 2, 3];
j.push(4);
j.push("5"); // jはArray<number>だからstringの値は追加できない

// c
let k: never = 4; // 呼び出し元に戻ることが無い関数の返り値 = neverなので、値が戻るnumberは割り当てられない？

// d
let l: unknown = 4;
let m = l * 2; // 型を絞り込む前に使おうとしているから？

if (typeof l === "number") {
  let n = l * 2; // lがnumberだったら処理する、みたいにすれば使える
}
