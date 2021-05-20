// オブジェクト操作の練習

import {cookieTopping} from '../src/mock/jsonMock'

const object1 = {
  A: 'a',
  B: 'b'
}

function objectEntries(param: Object) {
  return Object.entries(param)
}

// [ [ 'A', 'a' ], [ 'B', 'b' ] ]
// console.log(objectEntries(object1))

function joinParams(param: Object) {
  return Object.entries(param).join('-')
}

// A,a-B,b
// console.log(joinParams(object1))

function joinKeyAndParams(param: Object) {
  // 1. 配列データ[key, value]形式の配列（？）を作成
  // 2. Array.prototype.map()で配列データに対して&でjoinする
  // このreturn値にさらにjoinを重ねることも可能
  return Object.entries(param).map(data => data.join('&'))
}

// [ 'A&a', 'B&b' ]
console.log(joinKeyAndParams(object1))

function joinAllParams(param: Object){
  // [ 'A&a', 'B&b' ]の配列を&でさらにつないたテキストを返す
  return joinKeyAndParams(param).join('&')
}

//A&a&B&b
console.log(joinAllParams(object1))