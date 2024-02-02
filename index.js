const routes = [
  { path: '/', file: 'index.html' },
  { path: '/search', file: 'search.html' },
  { path: '/games', file: 'games.html' },
  { path: '/chat', file: 'chat.html' },
  { path: '/settings', file: 'settings.html' },
];
routes.forEach((route) => {
  app.get(route.path, (req, res) => {
    res.sendFile(path.join(__dirname, 'static', route.file));
  });
});
