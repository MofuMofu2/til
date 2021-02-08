import { cookieTopping, sortedTopping, sortedEndwithE } from "./mock/jsonMock";
import {
  sortTopping,
  sortToppingUseArrow,
  sortToppingEndWithE,
  endWithE,
} from "./sort";

// it("sortの挙動をテスト", () => {
//   expect(sortTopping(cookieTopping)).toEqual(sortedTopping);
//   expect(sortToppingUseArrow(cookieTopping)).toEqual(sortedTopping);
// });

it("パラメータ末尾がeの場合が先頭になるようにしたい関数をテスト", () => {
  // expect(sortToppingEndWithE(cookieTopping)).toEqual(sortedEndwithE);
  console.log(endWithE(cookieTopping));
  expect(endWithE(cookieTopping)).toEqual(sortedEndwithE);
});
