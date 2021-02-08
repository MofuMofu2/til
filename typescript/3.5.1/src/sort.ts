import { cookieTopping, sortedTopping } from "./mock/jsonMock";

type Topping = { id: string; type: string };

export function sortTopping(topping: Array<Topping>) {
  return topping.sort(function (a, b) {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return 0;
  });
}
