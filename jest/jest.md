# Jest

## 同じであるときのテスト、toBeを使うかtoStrictEqualを使うか

- [toStrictEqual](https://jestjs.io/docs/ja/expect#tostrictequalvalue)
- [toBe](https://jestjs.io/docs/ja/expect#tobevalue)
- [toEqual](https://jestjs.io/docs/ja/expect#toequalvalue)

オブジェクトを比較するときは`toEqual`か`toStrictEqual`を使う。`toBe`ではオブジェクト等価が判断できない。オブジェクトのプロパティに`undefined`が使われる可能性があるときは`toStrictEqual`を使う。