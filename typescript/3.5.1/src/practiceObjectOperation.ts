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
 

