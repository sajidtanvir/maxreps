const C = 'maxreps-v9';
self.addEventListener('install', (e) => { e.waitUntil(caches.open(C).then((c) => c.addAll(['./', './index.html', './manifest.webmanifest', './apple-touch-icon.png'])).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== C).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const r = e.request; if (r.method !== 'GET') return;
  if (/googleapis\.com|firebase|gstatic\.com\/recaptcha|google\.com\/recaptcha/.test(r.url) && !/fonts\./.test(r.url)) return;
  const u = new URL(r.url);
  if (r.mode === 'navigate') { e.respondWith(fetch(r).then((res) => { const cp = res.clone(); caches.open(C).then((c) => c.put('./index.html', cp)); return res; }).catch(() => caches.match('./index.html'))); return; }
  if (u.origin === location.origin || /fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) {
    e.respondWith(caches.match(r).then((hit) => hit || fetch(r).then((res) => { if (res.ok || res.type === 'opaque') { const cp = res.clone(); caches.open(C).then((c) => c.put(r, cp)); } return res; })));
  }
});
