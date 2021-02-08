import { cookieTopping, sortedTopping } from "./mock/jsonMock";
import { sortTopping, sortToppingUseArrow } from "./sort";

it("sortの挙動をテスト", () => {
  expect(sortTopping(cookieTopping)).toEqual(sortedTopping);
  expect(sortToppingUseArrow(cookieTopping)).toEqual(sortedTopping);
});
