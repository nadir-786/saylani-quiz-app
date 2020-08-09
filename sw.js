self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/index.html',
       '/index.js',
       '/icon/che_icon.png',
       '/tests/chem_1.json',
       '/tests/chem_2.json',
       '/tests/chem_3.json',
       '/tests/chem_4.json',
       '/tests/chem_5.json',
       '/tests/chem_6.json',
       '/tests/chem_8.json',
       '/tests/chem_7.json',
       '/tests/y_2015.json',
       '/tests/y_2017.json',
       '/tests/y_2016.json',
       '/tests/y_2018.json',
       '/tests/y_2019.json',
       '/app.css',
       '/end.html',
       '/end.js',
       '/game.css',
       '/game.js',
       '/game.html',
       '/highscores.html',
       '/highscores.js',
       '/highscores.css',
       '/select.css',
       '/select.html',
       '/sw.js',
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
