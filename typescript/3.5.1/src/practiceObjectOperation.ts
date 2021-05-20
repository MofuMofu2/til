// オブジェクト操作の練習

import {cookieTopping} from '../src/mock/jsonMock'

// [ '0', { id: '5001', type: 'None' } ],のように、[index番号 + オブジェクト]の配列がキーの数だけ生成される
function objectEntries(param: Object) {
  return Object.entries(param)
}

console.log(objectEntries(cookieTopping))