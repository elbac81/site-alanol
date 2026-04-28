// Service Worker - Cache & Offline Support
const CACHE_NAME = 'alanol-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/layout.js',
  '/img/logo.webp',
  '/offline.html'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache.filter(url => 
          !url.includes('index.html') // Skip HTML
        ));
      })
      .catch(err => console.log('Cache failed:', err))
  );
  self.skipWaiting();
});

// Fetch event - Network first, fallback to cache
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone and cache successful responses
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return response;
      })
      .catch(() => {
        // Return from cache or offline page
        return caches.match(event.request)
          .then(response => response || caches.match('/offline.html'));
      })
  );
});

// Activate event - Clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});
