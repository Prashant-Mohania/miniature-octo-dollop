'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a592b271751d3c868a7d7a9a46308be3",
"assets/assets/faceId.png": "c3bacda57fbebdf8a3f18e841bb98615",
"assets/assets/fonts/SFPRODISPLAYREGULAR.OTF": "aaeac71d99a345145a126a8c9dd2615f",
"assets/assets/icon.png": "413deb16e8a79b018a012f1fe63ebbb5",
"assets/assets/icons/alert.svg": "5cc2a0119f1e84264358aba76c2e695e",
"assets/assets/icons/automation.png": "e5adf9aea39094ef3dfaeee08fd8c9ab",
"assets/assets/icons/automation.svg": "f1465305ee3263df13817a8363b5130a",
"assets/assets/icons/bolt.png": "e5d98f1bc309af3e3b466dfc1ec6c4ac",
"assets/assets/icons/bolt.svg": "9e0f996ffe6abf187076ff1ac5de12c4",
"assets/assets/icons/call-add.svg": "fe991226ce87db2e03effba2ddc3f600",
"assets/assets/icons/call-minus.svg": "c95606de48f910dec392c8498feb6fd4",
"assets/assets/icons/check-mark.svg": "4f1fade087fbb4520b86e2771c3a0c48",
"assets/assets/icons/delete.svg": "df5e098abbd0b73290c4a49d92e5abd9",
"assets/assets/icons/growth.png": "8046ba177ca7abbd4fbf9c633109cc6a",
"assets/assets/icons/growth.svg": "c5bddac2ea9169649f61d74821340213",
"assets/assets/icons/home.svg": "723b89cd23fa785c9b608d6f329d8fc4",
"assets/assets/icons/image-gallery.png": "028da8f2ee55a63e6e8d7700ca4b7d0e",
"assets/assets/icons/image-gallery.svg": "53724495157ab831e90b8646b9c4dc2d",
"assets/assets/icons/learn.svg": "9cf5eedc06e2e19792e8d0aa8c2f3b68",
"assets/assets/icons/management.png": "e86d0ecfe89d48f9584e1f52e1f3063e",
"assets/assets/icons/management.svg": "7ed1a32dd51974a35fd7c4dd32635589",
"assets/assets/icons/okay.svg": "94a5d7860a3355de302edbf835b1bb9a",
"assets/assets/icons/prediction.png": "66ca0c625ef39e7b0bd4fe3bc8adc497",
"assets/assets/icons/prediction.svg": "861103feeed29358373bccd6311a2cf4",
"assets/assets/icons/quality.png": "f399407ca93588a76d7771138c6617dd",
"assets/assets/icons/quality.svg": "3ca25c01e00104eca458a67e30da1486",
"assets/assets/icons/router-device.png": "87f5a8adce1939f153b03fd601ce0cb8",
"assets/assets/icons/router-device.svg": "28e8cfb9a73d932881fd48cfb0c1ed62",
"assets/assets/icons/setting.svg": "90783b606cc8b719664352ef41ade9f4",
"assets/assets/icons/Shrimp-Growth.png": "5315e3471807d9e57c76780c36723f8e",
"assets/assets/icons/Shrimp-Growth.svg": "483c41030883ebcac6e1acb119216127",
"assets/assets/icons/video.svg": "f4ecf0e762d741b52cae921e04d523f6",
"assets/assets/icons/weather-moon.svg": "f7782079148333d6a6935357de3dbabd",
"assets/assets/icons/weather-sun.svg": "f6aba982fab0fcc9200e4c2afe086ecb",
"assets/assets/logo-white.png": "57b1862af000b7be3beace701e0f9900",
"assets/assets/logo.png": "29d2e4e113ae6d889cddb0cca27285d0",
"assets/assets/logo.svg": "3e332f156067cd14beab7363c7137993",
"assets/FontManifest.json": "f1a38af0517e4f89c72c14efb7763f2d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1d91d9ec39932422bff645df68c6056c",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "48abe37b151916bf8a8ac6c27e9fa068",
"/": "48abe37b151916bf8a8ac6c27e9fa068",
"main.dart.js": "01fefe638ff9fc87c1284cf845ee118f",
"manifest.json": "395d376958043be6e7158952ff8a69e0",
"version.json": "2eb7ed9335ac04f81e1e778f46bdba6c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
