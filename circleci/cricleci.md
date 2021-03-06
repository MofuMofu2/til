# CircleCIメモ

昔にやったはずなんだけど完全に忘れた。

- 設定は`.circleci/config.yml`
- `jobs`でビルドタスクを指定する
- 作業タスクは指定したDockerイメージで実行される
  - なので`yarn run test`とかしたいならタスク実行前にコマンドインストールしないとだめ
  - それか元からコマンドがインストールされているイメージを利用するか（あまりない？）
- `steps`で実行ジョブを設定
- `checkout`でリポジトリのコードをコンテナにチェックアウトする。なのでこれは必須
- `run`で実際の動作を記述
  - `name`タスク名
  - `command`実際の操作
  - `run:タスク内容`と書けるらしい
    - こういうのは内容が後から変更できるのが大事なので省略しない方が良さそう
  - `no_output_timeout`でタイムアウト時間を指定できる（デフォルトは30分？）
    - https://circleci.com/docs/ja/2.0/configuration-reference/

## トラブルなど

### JestのUnitTestがタイムアウトする

#### 原因

デフォルトのままテストを実行するとワーカーの数が足りないらしい

- コンテナと実機ではそもそも利用できるワーカーの数が違うことが多い
- Jestはデフォルトだとテストごとに子プロセスのワーカープールを作成してテストを実行する
  - この子プロセスのワーカープールというところがいまいちピンときていない

#### 対策

テスト実行時にオプションを利用する

- `--runInBand`
  - 今動いているプロセスだけでテストを実行する
  - [CircleCIのドキュメント](https://circleci.com/docs/2.0/collect-test-data/#jest)にも記載がある
- `--maxWorkers`
  - デフォルトだとCPUコア数＝ワーカー数になるが、このオプションでワーカー数を制御できる