'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "9c4f8f68506cf4d2dc9b05219cd69920",
"canvaskit/chromium/canvaskit.wasm": "c12d49097cc23926890e53dc56a640d2",
"canvaskit/canvaskit.js": "42cca10620a5e19f50b4d5cb990b74bf",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "5b13215adfc99b441723b8d1c9987b43",
"canvaskit/canvaskit.wasm": "13b5e39768535cea67b286e9e26eb03d",
"canvaskit/skwasm.wasm": "73891c378d428ce8834bf1570fd3597a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/posts/41.md": "cce71b276355a43ecf2af8ba716a73c6",
"assets/posts/31.md": "1244e6415fe328a18b26f559307bea25",
"assets/posts/21.md": "540cc7d92bdbd19e142e6a0c0d028d98",
"assets/posts/11.md": "fdccb6f4dbd605e517ee17c84e87becd",
"assets/posts/48.md": "c6fbadad8996c8183cac433b9a3ae66f",
"assets/posts/39.md": "c4bf796a353041b6a3381f9d10211854",
"assets/posts/47.md": "5fbfa8afc07e56855e8b24333ea4ef61",
"assets/posts/10.md": "25999eaadad58a7be7f901aba413a817",
"assets/posts/25.md": "1b0a18760fa401077cd3376d0649f1b2",
"assets/posts/28.md": "a36f14ca65fd1f0285fccab0bbd8a2f5",
"assets/posts/26.md": "dd6ed449d8e53ed60ce59739950cd1b2",
"assets/posts/30.md": "e66d149166bf740a0b48e78601bd9400",
"assets/posts/66.md": "97304f84bacce345dc4aed4d8df6a379",
"assets/posts/58.md": "dbc1333af0dd782d2c3143433ea8b234",
"assets/posts/57.md": "340009fc89924047e6413f0be903f0b6",
"assets/posts/17.md": "197d9d66e293c31fd68fd143c76fb2c8",
"assets/posts/62.md": "eb85a446887c452b2dc7baa2e4abad92",
"assets/posts/64.md": "b79fa3b92a6f8c6d7bd0afee3909d4a1",
"assets/posts/2.md": "c00a0839beda07542de9ba84234eb58f",
"assets/posts/56.md": "7794aac404f41a0eb86162cb9ee54471",
"assets/posts/1.md": "acb9f4f94d97d3dd55a9c3b3faad5858",
"assets/posts/38.md": "1e2ef713d620b2914ce4eb394e94b623",
"assets/posts/52.md": "0dc96d7bad40ab238d4b6727108959d1",
"assets/posts/19.md": "17e3436c1fa7e1c99d7a9276e969ff5b",
"assets/posts/59.md": "e1c06d85ae7b8b032bef47e42e4c08f9",
"assets/posts/5.md": "60e9dc8ea11b308c7e6af0f1e82b8a57",
"assets/posts/37.md": "ee2a4b722ee01ec906f124611b6719fa",
"assets/posts/36.md": "c4f54c7d6b0d5257294165d565708c33",
"assets/posts/42.md": "bfce98224d7cbc596e9e8dae4f82decf",
"assets/posts/32.md": "070e3e3b4ef9c30f95e3cfa5246665da",
"assets/posts/22.md": "2bb1f0cc092ba1eed8d245d2a7ca193b",
"assets/posts/7.md": "28b5e0271971e1f5a8b26470f6d77453",
"assets/posts/44.md": "d5944408086518fdaf7d68223a70d259",
"assets/posts/54.md": "e1c06d85ae7b8b032bef47e42e4c08f9",
"assets/posts/13.md": "1ffaea4b6e9c94470296bf6e30030565",
"assets/posts/51.md": "2a0543a0871c786c838c0315d638bea4",
"assets/posts/29.md": "8787ce524c25a789a3ecbd94f5c44205",
"assets/posts/20.md": "00e0d22e2b619e7383530d0f3cbcf185",
"assets/posts/45.md": "e1c06d85ae7b8b032bef47e42e4c08f9",
"assets/posts/46.md": "b81534c60cfc8a1785ebc8b909093734",
"assets/posts/63.md": "24e7f2707a923d9a1fa0be06a253a089",
"assets/posts/53.md": "1d2b92e13a6b07f7f9e3e27bd26bbbf0",
"assets/posts/24.md": "f52087972f83d46a360febc420d6eb50",
"assets/posts/34.md": "4a16eb7c7717f84226dc472a69643b93",
"assets/posts/49.md": "e1c06d85ae7b8b032bef47e42e4c08f9",
"assets/posts/65.md": "9553134cbca40d03d6abc857304f6586",
"assets/posts/9.md": "78991df0f97a6768cf9ccc7ac0b30b08",
"assets/posts/12.md": "0b8ebac69f618fdefaced50e3b5fa31e",
"assets/posts/55.md": "9505c847856d991f98648a21e913fe65",
"assets/posts/43.md": "d8f6926e893b7004c85a33d87e70cbd7",
"assets/posts/60.md": "e1c06d85ae7b8b032bef47e42e4c08f9",
"assets/posts/15.md": "7ea616ef162e5a5c35ee623768264bce",
"assets/posts/3.md": "0bb483ae3496893a5573ea6fe4af2a1b",
"assets/posts/18.md": "15b828577c128367f1dafb401c386831",
"assets/posts/61.md": "04cd642bf4ee7ed7acee4570a796d933",
"assets/posts/33.md": "9629b5d0b27814fb01eb75cb5ac804bc",
"assets/posts/40.md": "b521e91a36dff45f972b00d5130517c7",
"assets/posts/50.md": "c6243f6541aec907745954b7d0ff450d",
"assets/posts/14.md": "29f9779bebd85b31e683c515ff2b9ef2",
"assets/posts/6.md": "6570ae248a223227b622a8cfc78c18f5",
"assets/posts/4.md": "4ba60af56b72adc10f52e5fe83cf9998",
"assets/posts/item_list.json": "51f2d47c139ec7241d20b08368553859",
"assets/posts/23.md": "71bb053373dd1335c853eb67edccf997",
"assets/posts/35.md": "f4b22095cc424bab988400ae38ff4e0c",
"assets/posts/8.md": "1b54afffc736ceed5d157ac420c587c8",
"assets/posts/27.md": "cbef8fe4a430505f3fc90051b056ccc1",
"assets/posts/16.md": "0c901e67a20835832901791e9802c747",
"assets/AssetManifest.bin.json": "dd514cf252a853a7a7804b0addd255d6",
"assets/AssetManifest.json": "a3c6785afdf45fcbb612bbdb9054cebd",
"assets/NOTICES": "6aaaa6f077fbe24931213b27d91eeaac",
"assets/AssetManifest.bin": "d97decb08a16932a11f56f21305918d1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "3265e4dca96cbeed42cb8c8a4076328d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"version.json": "5603abc73000b9d2e1e1a7b99cac3fb6",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"index.html": "7d7835874af7e4c10b08569f55ee838e",
"/": "7d7835874af7e4c10b08569f55ee838e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "0d55023a2cb77e5e890b7a6813174534",
"manifest.json": "9681b6d51d61be704c1d337100d5c2c1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
