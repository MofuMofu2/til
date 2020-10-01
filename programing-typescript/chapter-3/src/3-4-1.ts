let a = 1042; // number
let b = "apples and oranges"; //string
const c = "pineapples"; // ×string c:'pineapples' = リテラル型
let d = [true, true, false]; // boolean[] Array<boolean>
let e = { type: "ficus" }; // Object {type: string}
let f = [1, false]; // Array<number | boolean> -> 型チェックの手間が増えるので避ける
const g = [3]; // Array<number>
let h = null; // nullかと思ったけどanyになる。6.1.4で「nullまたはundefinedに初期化された変数はanyに拡大解釈される」と書いてある
