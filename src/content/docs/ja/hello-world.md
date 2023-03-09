---
title: "Hello, World!"
description: "Hello, World!"
---

まずは [Hello world](https://ja.wikipedia.org/wiki/Hello_world) から始めましょう！

- 好きな場所に `hello_world` フォルダを作成します。
- その中に `hello.v` という名前の新しいファイルを作り、その中に以下のコードを記述します。

```v
module main

fn main() {
	println('Hello, World!')
}
```

このプログラムを実行するときは、次のように実行します。
`v run hello.v`

実行すると以下のようにターミナルに `Hello, World!` と表示されました！
```shell
> v run hello.v
Hello, World!
```
※ 本書ではコマンド列であることを表すために `>` を利用します。

コンパイルするだけで実行しなくても良いときは `v hello.v` を実行します。
