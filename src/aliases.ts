export {};

type Mojiretsu = string;

const foo: Mojiretsu = 'ham';

// aliasesは複数箇所で同じ型を定義したい時に便利。
type Profile = {
  name: string;
  age: number;
}

const profile: Profile = {
  name: 'ham',
  age: 48
};

// 以下のように型を定義できるが、毎回以下を書くとコード量が増えて大変になることや書くのが大変。
const profile2: {
  name: string;
  age: number;
} = {
  name: 'ham',
  age: 48
};

// 以下のように定義もできる。型定義に間違えが少なくて良い。
type Profile2 = typeof profile2;