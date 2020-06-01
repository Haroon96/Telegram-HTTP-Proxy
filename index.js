var httpProxy = require('http-proxy');

httpProxy.createProxyServer({
    target: {
      protocol: 'https:',
      host: 'api.telegram.org',
      port: 443
    },
    changeOrigin: true,
  }).listen(process.env.PORT || 8000);