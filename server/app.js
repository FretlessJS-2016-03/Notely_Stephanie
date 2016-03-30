var express = require('express');
var notelyServerApp = express();

// CORS - cross origin resource sharing middleware
notelyServerApp.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

notelyServerApp.get('/', function(req, res) {
  //res.send('I <3 Express!');
  res.json([
      {
        "title": "Note 1 (hard-code)",
        "body_html" : "Body 1 (hard-code)"
      },
      {
        "title": "Note 2 (hard-code)",
        "body_html" : "Body 2 (hard-code)"
      },
      {
        "title": "Note 3 (hard-code)",
        "body_html" : "Body 3 (hard-code)"
      }
    ]);
});

notelyServerApp.listen(3030, function() {
  console.log('Listening on http://localhost:3030');
});
