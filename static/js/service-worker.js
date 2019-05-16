self.addEventListener('install', (event) => {
  let CACHE_NAME = 'image-cache';
  let urlsToCache = [
    '/static/img/cbs-logo.png',
    '/static/img/nerdwallet-logo.png',
    '/static/img/brightwheel-logo.svg',
    '/static/img/rocketlawyer-logo.png',
    '/static/img/fullstack-react-native-gumroad.png'
  ];

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        const cachesToDelete = cacheNames.map((cacheName) => {
          return caches.delete(cacheName);
        });

        return Promise.all(cachesToDelete);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});