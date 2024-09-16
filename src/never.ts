export {};

// never型は呼び元に値が返ってこない。例外処理に使用される。void型と似ているが、void型は返却される値がないものの、呼び元に返却される。neverは値も返却もない。
// void型は値を編集に代入できるが、neverはそもそも値を代入できない。
function error(msg: string): never {
  throw new Error(msg);
}

try {
  let result = error('test')
  console.log({result})
} catch(e) {
  console.log({e})
}