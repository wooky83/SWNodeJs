const express = require('express');
const app = express();
const message = require('./message.js')
let all_letters = ' ';

app.get("/",  function(request, response) {
  for(let i = 0; i <= message["letters"].length - 1; i++) {
    all_letters += message["letters"][i] + " <br/>";
  }
  response.send(all_letters);
});

app.get("/users/:name", (req, res) => {
  res.send(req["params"]["name"])
})

app.listen(3000, (error) => {
  if(error == true) {
    console.log("some error occured");
  } else {
    console.log("listening on localhost:3000");
  }
})
