self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('jsrun2-store').then(function(cache) {
     return cache.addAll([
       '/pwa/',
       '/pwa/index.html',
       '/pwa/index.js',
       '/pwa/images/pirate_PNG90.png'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});