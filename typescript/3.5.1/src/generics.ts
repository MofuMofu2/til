// プログラミングTypeScript 4.2 ポリモーフィズムより

type Filter = {
  <T>(array: T[], f:(item: T) => boolean): T[]
}

// interfaceでは同じ書き方できない。なんで？
// interface Filtered = {
//   <T>(array: T[], f:(item: T) => boolean): T[]
// }