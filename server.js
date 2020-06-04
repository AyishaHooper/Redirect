const REDIRECT_URL = "https://springhouse365.sharepoint.com";

"use strict";

const express = require('express');
const app = express();

app.all('*', function(req, res, next){
  let newURL = REDIRECT_URL + req.originalUrl;

  console.log("Redirecting to " + newURL);

  res.redirect(newURL);

  next();

});

app.listen(3000, ()=> {
  console.log(`Server started on port 3000`);
});
