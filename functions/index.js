const functions = require('firebase-functions');
const app = require('./dist/server/bundle').default;

exports.ssr = functions.https.onRequest(app);
