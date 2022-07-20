/* /server-status に GET アクセスすると、ロードアベレージの配列がJSON形式で取得されるようにする */

'use strict';
const express = require('express');
const router = express.Router();

//ロードアベレージ取得のために、OSモジュールを読み込む
const os = require('os');

//GETメソッドで、/ に対してのハンドラを登録
//res.json()...引数として受け取ったオブジェクトをJSON形式にしてレスポンスを返す
//os.loadavg()...がロードアベレージを取得するための関数
router.get('/', (req, res, next) => {
  res.json({ loadavg: os.loadavg() });
});

module.exports = router;