const express = require('express');
// const proxy = require('express-http-proxy');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 5001;

app.use('/properties', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
app.use('/exampleHomeSummary/', createProxyMiddleware({ target: 'http://localhost:3333', changeOrigin: true }));
app.use('/api/neighborhoods', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
app.use('/api/houses', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
app.use('/api/gethomepictures', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));


app.listen(port, () => {
  console.log(`Proxy is listening on ${port}`);
});

app.use(express.static('./dist'));
