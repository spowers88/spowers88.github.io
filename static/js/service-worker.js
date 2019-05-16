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
  '/',
  '/dist/main.css',
  '/dist/bundle.js'
];

self.addEventListener('install', (event) => {
  console.log('Installing service worker');

  event.waitUntil(
    Promise.all([
      caches.open(ASSETS_CACHE_NAME)
      .then(cache => cache.addAll(assetsUrlsToCache)),
      caches.open(IMAGE_CACHE_NAME)
      .then(cache => cache.addAll(imageUrlsToCache))
    ])
  );
});

self.addEventListener('activate', (event) => {
  console.log('Activating service worker');
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);
  console.log('Fetch event for ', event.request.url);

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }

        console.log('Network request for ', event.request.url);
        return fetch(event.request);
      })
  );
});