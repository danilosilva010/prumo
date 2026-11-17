const V='prumo-fe9d7e56b3',ARQ=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(ARQ)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin)return;
  e.respondWith(fetch(r).then(x=>{if(x.ok){const k=x.clone();caches.open(V).then(c=>c.put(r,k));}return x;}).catch(()=>caches.match(r).then(m=>m||caches.match('index.html'))));});
