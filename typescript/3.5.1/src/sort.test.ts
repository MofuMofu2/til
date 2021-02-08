import { cookieTopping, sortedTopping } from "./mock/jsonMock";
import { sortTopping } from "./sort";

it("sortの挙動をテスト", () => {
  expect(sortTopping(cookieTopping)).toEqual(sortedTopping);
});
