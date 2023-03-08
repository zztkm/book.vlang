---
title: "Vをインストールする"
description: "Vをインストールする手順を紹介する"
---

Vの公式インストール手順は[こちら](https://github.com/vlang/v#installing-v-from-source)から確認できます。

以下の手順は公式より一部抜粋したものです。(引用元: https://github.com/vlang/v#installing-v-from-source)

```shell
git clone https://github.com/vlang/v
cd v
make
# HINT: Using Windows? run make.bat in a cmd shell, or ./make.bat in PowerShell
```

Vは自動でPATHに追加されるわけではないのですが、PATHに追加するための便利な `symlink` コマンドがあります。

```shell
sudo ./v symlink
# or ./v symlink in PowerShel
```

PATHに追加したことでどこからでもVを呼び出せるようになります！
PATHへの追加が反映されるようにシェルを再起動してください。
