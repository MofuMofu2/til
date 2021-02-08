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

export function sortToppingUseArrow(topping: Array<Topping>) {
  return topping.sort((a, b) => {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return 0;
  });
}

/**
 * 末尾が「E」のものを先頭に並べ替えたかった。並べ替えはアルファベット順
 * @param topping - トッピング種別
 */
export function sortToppingEndWithE(topping: Array<Topping>) {
  return topping.sort((a, b) => {
    const typeA = a.type.endsWith("e");
    if (typeA) {
      console.log(a.type);
      if (a.type < b.type) {
        console.log("return -1" + a.type, b.type);
        return -1;
      }
      //   if (a.type > b.type) {
      //     console.log("return 1" + a.type, b.type);
      //     return 1;
      //   }
    }
    return 0;
  });
}

export function endWithE(topping: Array<Topping>) {
  let endWithEArray = [];
  let withOutEArray = [];
  for (let index = 0; index < topping.length; index++) {
    if (topping[index].type.endsWith("e")) {
      endWithEArray.push(topping[index]);
    } else {
      withOutEArray.push(topping[index]);
    }
  }
  // 文字列順に並び替える
  endWithEArray.sort((a, b) => {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return 0;
  });

  // 文字列順に並び替える
  withOutEArray.sort((a, b) => {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return 0;
  });
  // くっつけて返す
  return endWithEArray.concat(withOutEArray);
}
