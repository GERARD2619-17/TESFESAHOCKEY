
//asignar un nombre y versión al cache
const CACHE_NAME = 'WebDeveloper',
  urlsToCache = [
    './',
    './index.html',
    './sobrenosotros.html',
    './nuestrosatletas.html',
    './ligaestudiantil.html',
    './equipos.html',
    './tabladeposisciones.html',
    './entranientos.html',
    './contactanos.html',
    './entrenamientos.html',
    './css/style.min.css',
    './css/style.css',

    './js/bootstrap.bundle.min.js',
    './js/jquery-3.6.0.js',
    './js/main.js',

    './lib/animate/animate.min.css',
    './lib/counterup/counterup.min.css',
    './lib/easing/easing.min.css',
    './lib/easing/easing.js',
    './lib/owlcarousel/assets/ajax-loader.gif',
    './lib/owlcarousel/assets/owl.carousel.css',
    './lib/owlcarousel/assets/owl.carousel.min.css',
    './lib/owlcarousel/assets/owl.theme.default.min.css',
    './lib/owlcarousel/assets/owl.theme.default.green.css',
    './lib/owlcarousel/assets/owl.theme.default.green.min.css',
    './lib/owlcarousel/assets/owl.video.play.png',
    './lib/owlcarousel/owl.carousel.js',
    './lib/owlcarousel/owl.carousel.min.js',
    './lib/tempusdominus/css/tempusdominus-bootstrap-4.css',
    './lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css',
    './lib/tempusdominus/js/moment-timezone.min.js',
    './lib/tempusdominus/js/moment.min.js',
    './lib/tempusdominus/js/tempusdominus-bootstrap-4.js',
    './lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js',
    './lib/waypoints/links.php',
    './lib/waypoints/waypoints.min.js',

    './mail/contact.js',
    './mail/contact.php',
    './mail/jqBootstrapValidation.min.js',

    './regist_serviceWorker.js',
    './pwa/images/icons/logohockeyicon-512x512.png',
    './pwa/images/icons/logohockeyicon-72x72.png'
  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener("activate", (e) =>{
  console.log('se activo')
})
//almacenamiento cahe :D
self.addEventListener("fetch", (e) => {
console.log(`Intercepting fetch request for: ${e.request.url}`);
e.respondWith(
  caches.match(
    e.request
    
  ).then(respuesta =>  respuesta)

);
});