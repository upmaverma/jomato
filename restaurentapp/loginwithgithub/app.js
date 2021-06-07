const express = require("express");
const app = express();
const superagent = require("superagent");
const request = require("request");
const port = 7800;
const cors = require("cors");
const bodyParser = require("body-parser");
const { response } = require("express");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(
    "<a href='https://github.com/login/oauth/authorize?client_id=8c39feb987bb5f41b63f'>Login with github</a>"
  );
});

app.post("/oauth", (req, res) => {
  superagent
    .post("https://github.com/login/oauth/access_token")
    .send({
      client_id: "8c39feb987bb5f41b63f",
      client_secret: "9ff012b0a0bd0c1d79852f68b4302193c6b1fd8a",
      code: req.body.code,
    })
    .set("Accept", "application/json")
    .end((err, result) => {
      var accesstoken = result.body.access_token;
      const option = {
        url: "https://api.github.com/user",
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "token " + accesstoken,
          "User-Agent": "mycode",
        },
      };
      request(option, (err, response, body) => {
        return res.send(body);
      });
    });
});

app.listen(port);
