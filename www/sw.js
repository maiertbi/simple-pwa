self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('simple-pwa-v1')
            .then(cache => cache.addAll([
                './',
                './index.html',
                './app.js',
                './style.css',
                'icons/icon16.png',
                'icons/icon192.png',
                'icons/icon196.png',
                'icons/icon512.png',
                './manifest.webmanifest'
            ]))
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open('simple-pwa-v1')
            .then(function (cache) {
                return cache.match(event.request);
            }).then(function (response) {
                return response || fetch(event.request);
            })
    );
});