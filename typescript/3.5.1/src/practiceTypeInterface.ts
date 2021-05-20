const menu = {
  appetizer: 'salad',
  main: 'steak',
  dessert: 'cake',
  price: 2000
}

// 型変数Tをセット
function getMenuList<T>(param: T) {
  return param
}

// ここでmenuの型情報がセットされる
const menuList = getMenuList(menu)

// なのでkeyで呼び出してもanyで処理されない。便利！
// salad
console.log(menuList['appetizer'])

