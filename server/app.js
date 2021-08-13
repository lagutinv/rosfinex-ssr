import { createReactAppExpress } from '@cra-express/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import path from 'path';
let App = require('../src/App').default;

const clientBuildPath = path.resolve(__dirname, '../client');

const handleUniversalRender = (req, res) => {
  const context = {};
  const el = (
    <StaticRouter location={ req.url } context={ context }>
      <App />
    </StaticRouter>
  );
  return context.url ? res.redirect(301, context.url) : el;
}

const app = createReactAppExpress({
  clientBuildPath,
  universalRender: handleUniversalRender,
  onFinish(_, res, html) {
    const { title, meta } = Helmet.renderStatic();
    const newHtml = html
      .replace('</head>', `${ title }</head>`)
      .replace('</head>', `${ meta }</head>`);
    res.send(newHtml);
  }
});

if (module.hot) {
  module.hot.accept('../src/App', () => {
    App = require('../src/App').default;
    console.log('✅ Server hot reloaded App');
  });
}

export default app;
