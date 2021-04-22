interface TestType {
  name: string;
  stats: string;
  content: string;
}

let test:any  = {}

// これはType Assertつくが、axiosとかでもらってきたものはつかん。ちょっとわかってないんだと思う
test = {
  name: 'a',
  stat: 'enabled',
  content: 'use enabled'
} as TestType

console.log(test)