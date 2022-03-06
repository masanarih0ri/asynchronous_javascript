## Promiseとは
* 非同期処理を抽象化したオブジェクトと、それを操作する仕組みのこと
* 非同期処理を抽象化したpromiseオブジェクトを用意して、それに対して成功時の処理と失敗時の処理の関数を登録するようにして使う
* コールバック関数を使うことで同じようなことはできるが、promiseという統一されたインターフェースを提供することで書き方を限定する
* 書き方を限定することで、複雑な非同期処理をうまくパターン化できるのが特徴

## Promiseを書くときの基本的な考え方
最もシンプルな以下のパターンで考えてみる。

* 以下の`asyncFunc()`の返り値はpromiseオブジェクト
* このpromiseオブジェクトは、何も問題がなければsetTimeoutで1秒後にresolve（=問題なく処理）されるので、resolveされると、then以下の処理に入る
* resolveの引数に設定した`{ age: 34 }`がvalueに渡される
* `console.log(value)` が実行され、`{ age: 34 }` が出力される
* setTimeoutの箇所でエラーが起きた場合はcatch以下の処理に入る

```javascript
function asyncFunc () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ age: 34 })
    }, 1000)
  })
}

asyncFunc().then((value) => {
  console.log(value)
}).catch((error) => {
  console.error(error)
})
```
