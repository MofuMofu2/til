# lighhouse ci

## install

### npmの場合

`npm install -g @lhci/cli`

```bash
$ npm install -g @lhci/cli
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
/usr/local/bin/lhci -> /usr/local/lib/node_modules/@lhci/cli/src/cli.js
+ @lhci/cli@0.5.0
added 412 packages from 266 contributors in 13.876s

lhci
zsh: correct 'lhci' to 'lc' [nyae]? n

lhci <command> <options>

コマンド:
  lhci collect      Run Lighthouse and save the results to a local folder
  lhci upload       Save the results to the server
  lhci assert       Assert that the latest results meet expectations
  lhci autorun      Run collect/assert/upload with sensible defaults
  lhci healthcheck  Run diagnostics to ensure a valid configuration
  lhci open         Opens the HTML reports of collected runs
  lhci wizard       Step-by-step wizard for CI tasks like creating a project
  lhci server       Run Lighthouse CI server

オプション:
  --help             ヘルプを表示                                         [真偽]
  --version          バージョンを表示                                     [真偽]
  --no-lighthouserc  Disables automatic usage of a .lighthouserc file.    [真偽]
  --config           JSONの設定ファイルまでのpath

オプションではない引数が 0 個では不足しています。少なくとも 1 個の引数が必要です:
```

### yarnの場合

`yarn global add @lhci/cli@0.4.x`

CIで実行する場合、コマンドにパスが通らず失敗することがある。
環境変数を通して解決する方法もあるが、コマンドのインストール場所を探してタスクに組み込んだ方が確実だったりする。

## 設定

`lighthouserc.yml`を準備しておく。`.js`ファイルとかでも良い。
利用できる拡張子は[Configration](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md)に記述がある。

### 結果出力先

[target](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md#target)で指定する。

- temporary-public-storage
  - GCSに保存される
    - public
    - 3 - 数週間で消える
- lhci
  - lhciサーバーを構築してそこに送信する
    - 運用できる体力があるなら便利そう
- filesystem
  - その環境のローカルにhtml + jsonを置く
    - CIでやるならこのhtmlをストレージとかに出力する、で充分かも
    - `outputDir`で出力先dirを指定できる
    - `reportFilenamePattern`でファイル名パターンを変更できる

## 実施してみる

commit `3f75ed5e34a4dccd3b987c5c7045c59121cc25a3`の状態でlighthouse ciを実施してみる

```bash
$ lhci autorun
✅  .lighthouseci/ directory writable
✅  Configuration file found
✅  Chrome installation found
⚠️   GitHub token not set
Healthcheck passed!

Started a web server on port 50696...
Running Lighthouse 3 time(s) on http://localhost:50696/index.html
Run #1...done.
Run #2...done.
Run #3...done.
Done running Lighthouse!

Dumping 3 reports to disk at /Users/mofumofu/git/til/vue/sandbox-lightouse-ci/lighthouse-ci...
Done writing reports to disk.

Done running autorun.
```

結果ファイルも生成される

```bash
$ ls -al lighthouse-ci
total 5128
drwxr-xr-x   9 mofumofu  staff     288 10  8 15:58 .
drwxr-xr-x  17 mofumofu  staff     544 10  8 15:57 ..
-rw-r--r--   1 mofumofu  staff  566543 10  8 15:58 localhost-_index_html-2020_10_08_06_57_51.report.html
-rw-r--r--   1 mofumofu  staff  302893 10  8 15:58 localhost-_index_html-2020_10_08_06_57_51.report.json
-rw-r--r--   1 mofumofu  staff  566613 10  8 15:58 localhost-_index_html-2020_10_08_06_57_55.report.html
-rw-r--r--   1 mofumofu  staff  302963 10  8 15:58 localhost-_index_html-2020_10_08_06_57_55.report.json
-rw-r--r--   1 mofumofu  staff  567037 10  8 15:58 localhost-_index_html-2020_10_08_06_57_59.report.html
-rw-r--r--   1 mofumofu  staff  303387 10  8 15:58 localhost-_index_html-2020_10_08_06_57_59.report.json
-rw-r--r--   1 mofumofu  staff    1528 10  8 15:58 manifest.json
```

`/Users/mofumofu/git/til/vue/sandbox-lightouse-ci/lighthouse-ci/localhost-_index_html-2020_10_08_06_57_51.report.html`を開いてみると、スコアが確認できた。