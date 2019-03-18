const express = require('express');
const app = express();

app.get("/",  function(request, response) {
  response.send("<h1 style='text-align:center'>Hey Friends, welcome to my app</h1>")
});

app.listen(3000, (error) => {
  if(error == true) {
    console.log("some error occured");
  } else {
    console.log("listening on localhost:3000");
  }
})
