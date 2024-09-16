export {};

//aliasesと同様にinterfaceもオブジェクト型に自分で型を定義できる。
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'ham',
  age: 43
}