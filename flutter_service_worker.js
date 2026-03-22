'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ce398e83cc3b83d8f3f36f07001bc4a7",
"version.json": "6f8c2de88dea5d98ea4f9639de33d9ed",
"index.html": "b233e15330a0fdbb4f3e2f390ec30df3",
"/": "b233e15330a0fdbb4f3e2f390ec30df3",
"main.dart.js": "ee45206a737ef445283dda9c28d74179",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "b54ff0632890d26661327f87bd763244",
"icons/Icon-192.png": "d4fb97633362035d745cd1dd814edb44",
"icons/Icon-maskable-192.png": "d4fb97633362035d745cd1dd814edb44",
"icons/Icon-maskable-512.png": "8ba40eddef8934e751b68451d449db16",
"icons/Icon-512.png": "8ba40eddef8934e751b68451d449db16",
"manifest.json": "99d4d5b0e42ae5e4e17308de7539c7c4",
"assets/NOTICES": "9df0e46394966321149649ad405bfa70",
"assets/FontManifest.json": "994924408894e7e46c223969ec99c057",
"assets/AssetManifest.bin.json": "0ce593cc4c27c1db79927fc075993cb6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "3b5483f38af7e2e1721431aad116ee59",
"assets/fonts/MaterialIcons-Regular.otf": "ae6e9ad19ea7be57a8151e3716cb2d1d",
"assets/assets/images/icon.png": "3037ee2b3482bb6ddca72dd430404b51",
"assets/assets/images/large-logo.png": "3037ee2b3482bb6ddca72dd430404b51",
"assets/assets/images/appicon.png": "3037ee2b3482bb6ddca72dd430404b51",
"assets/assets/i18n/tr.json": "7671cbbc836eb6bb0d7fb72f2f00d954",
"assets/assets/i18n/de.json": "1395406a84e57e19df606090f8a7745c",
"assets/assets/i18n/fi.json": "d822a77d70b24c512efe5a09de9bc263",
"assets/assets/i18n/en.json": "7382f4a91e849c5b0861840b1f4b4979",
"assets/assets/i18n/fr.json": "172afdf7d4ae29c17f5cc622aeb9e3c7",
"assets/assets/i18n/da.json": "dc199c39ae138fad91a0cb03b4fe1db7",
"assets/assets/i18n/sv.json": "4f99d226d8d574b9fa16d04088897a7b",
"assets/assets/i18n/es.json": "5acd3af3c87f2ca90d74fb5c472a1df2",
"assets/assets/i18n/nb.json": "6d90c8b4654dee66d1c577b980a3bfad",
"assets/assets/fonts/QanelasThin.otf": "675d175b4a3d924d83ae4f9d41d4e291",
"assets/assets/fonts/QanelasHeavy.otf": "3a042fc8a2b4b6efe51dacdb46cf6edf",
"assets/assets/fonts/QanelasBold.otf": "5f441340d5c4e9d671a2789b0e1b5b5f",
"assets/assets/fonts/QanelasRegular.otf": "dfcb3fff9cb51820933954bfc2a960d8",
"assets/assets/fonts/QanelasHeavyItalic.otf": "6ae0d6073497b3d8ed4e87697f77d397",
"assets/assets/fonts/QanelasUltraLight.otf": "84587596603c979bd97cb28fa8923743",
"assets/assets/fonts/QanelasLightItalic.otf": "5dea0672b24746879a2f3e2da8c3e6cd",
"assets/assets/fonts/QanelasExtraBold.otf": "3e8323f84ffb07f82a560ff516a54297",
"assets/assets/fonts/QanelasBlackItalic.otf": "ea61643199dfe82fd054de488e71f420",
"assets/assets/fonts/QanelasThinItalic.otf": "7e75e94b4627f3fe1ed5e9748abed36e",
"assets/assets/fonts/QanelasExtraBoldItalic.otf": "c46e4d83d44a9a337d8c637d0fef628e",
"assets/assets/fonts/QanelasBoldItalic.otf": "20ef2840e9c69624d500367bce0216cc",
"assets/assets/fonts/QanelasLight.otf": "c21b4ad1a44f174713a673ec6af0fdd9",
"assets/assets/fonts/QanelasUltraLightItalic.otf": "a5d85d636307d3692ecf708cf33c40c3",
"assets/assets/fonts/QanelasMediumItalic.otf": "130b1fe9ef3cd58a3d28def376b089d7",
"assets/assets/fonts/QanelasBlack.otf": "f054d1c86b2e129a4ed57e64acd5a711",
"assets/assets/fonts/QanelasMedium.otf": "7a354e073c1f181404b76d228ced58ac",
"assets/assets/fonts/QanelasRegularItalic.otf": "5a354a94feff94ec007e40745163da94",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
