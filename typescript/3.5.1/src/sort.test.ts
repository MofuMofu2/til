import { cookieTopping, sortedTopping, sortedEndwithE } from "./mock/jsonMock";
import { sortTopping, sortToppingUseArrow, sortToppingEndWithE } from "./sort";

// it("sortの挙動をテスト", () => {
//   expect(sortTopping(cookieTopping)).toEqual(sortedTopping);
//   expect(sortToppingUseArrow(cookieTopping)).toEqual(sortedTopping);
// });

it("パラメータ末尾がeの場合が先頭になるようにしたい関数をテスト", () => {
  console.log(sortToppingEndWithE(cookieTopping));
  expect(sortToppingEndWithE(cookieTopping)).toEqual(sortedEndwithE);
});
