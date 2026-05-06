const CACHE_NAME = 'memory-relay-v1';
const ASSETS = [
  'index.html',
  '재형.png', '은우.png', '혜란.png', '민수.png', '지우.png', '소연.png',
  '재형m.mp3', '은우m.mp3', '혜란m.mp3', '민수m.mp3', '지우m.mp3', '소연m.mp3'
];

// 설치 시 자원 저장
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 자원 호출 시 캐시 우선 사용
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});