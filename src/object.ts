export {};

//objectは型は制約が緩すぎるため、想定外のデータ型が入ってきてしまう。そのため、できるだけ、オブジェクトの中の型も定義する。

let profile: object = {name: 'ham'};
profile = {birth: 1987};
console.log({profile})

let profile2: {
    name: string;
} = {name: 'ham'};
// profile2 = {birth: 1987};
console.log({profile2})
