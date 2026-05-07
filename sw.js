// Bu dosya sitenin uygulama olarak yüklenebilmesi için gereklidir.
const CACHE_NAME = 'noir-coffee-v1';

self.addEventListener('install', (event) => {
    console.log('Service Worker: Kuruldu');
});

self.addEventListener('fetch', (event) => {
    // Ağa git, başarısız olursan önbellekten çek (Temel PWA gereksinimi)
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});