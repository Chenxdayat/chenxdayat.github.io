self.addEventListener('message', function(event) {
    if (event.data.action === 'clearCache') {
        caches.keys().then(function(cacheNames) {
            cacheNames.forEach(function(cacheName) {
                caches.delete(cacheName);
            });
        });
    }
});
