const express = require("express");
const request = require("request");
const cheerio = require("cheerio");
let app = express();
app.get("/", function(req, res) {
  request("http://www.jikexueyuan.com", function(error, response, body) {
    // console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  // res.setHeader(200, {'Content-Type': 'text/json; charset=utf-8'})

    let $ = cheerio.load(body) // 当前的$符号网页body的选择器
    res.json({
      'className': $('.copyright').html()
    })
    // console.log("body:", body); // Print the HTML for the Google homepage.
  });
});
app.listen(3000);
