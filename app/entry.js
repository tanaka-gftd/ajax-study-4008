'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');

scalingButton.on('click', () => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

const movingButton = $('#moving-button');

movingButton.on('click', () => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});

//index.pug内の、loadavgというidが設定された要素を取得（jQuery）
const loadavg = $('#loadavg');

//setInterval...第二引数で与えられた整数のミリ秒間隔で、第一引数の関数を実行する
// /server-status というパスに何のデータも渡さずにアクセスし、レスポンスが返ってきた際に実行する無名関数を設定
setInterval(() => {
  $.get('/server-status', {/* 何のデータも無名関数に渡さない */}, (data) => {

    //引数dataのloadavgプロパティから、ロードアバレージの値を格納した配列を取得して文字列に変換し、loadavgのテキストとして設定
    loadavg.text(data.loadavg.toString());  
  });
}, 10);
