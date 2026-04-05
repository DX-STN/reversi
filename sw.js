self.addEventListener('install', event => {
   console.log('Service Worker: install');
 // ここではキャッシュは何もしない最小構成
  self.skipWaiting();
});

    self.addEventListener('activate', event => {
       console.log('Service Worker: activate');
     return self.clients.claim();
    });

       self.addEventListener('fetch', event => {
         // ここでは単にネットワークへ流すだけ
         // オフライン対応は後からここを拡張
       });