self.addEventListener('install', (event) => {
  const IMAGE_CACHE_NAME = 'image-cache';
  const ASSETS_CACHE_NAME = 'assets-cache';
  let imageUrlsToCache = [
    '/static/img/cbs-logo.png',
    '/static/img/nerdwallet-logo.png',
    '/static/img/brightwheel-logo.svg',
    '/static/img/rocketlawyer-logo.png',
    '/static/img/fullstack-react-native-gumroad.png'
  ];
  let assetsUrlsToCache = [
    '/dist/main.css',
    '/dist/bundle.js'
  ];

  event.waitUntil(
    caches.open(ASSETS_CACHE_NAME)
      .then(cache => cache.addAll(assetsUrlsToCache))
  );
  event.waitUntil(
    caches.open(IMAGE_CACHE_NAME)
      .then(cache => cache.addAll(imageUrlsToCache))
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