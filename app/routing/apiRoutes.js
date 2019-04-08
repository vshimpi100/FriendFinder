const fs = require("fs");

module.exports = function(app) {
  // get friends route
  app.get("/api/friends", function(req, res) {
    let friendsRaw = fs.readFileSync("app/data/friends.js");
    let friends = JSON.parse(friendsRaw);
    res.json(friends);
  });

  // add friend route
  app.post("/api/friends", function(req, res) {
    let friendsRaw = fs.readFileSync("app/data/friends.js");
    let friends = JSON.parse(friendsRaw);
    friends.push(req.body);
    data = JSON.stringify(friends);
    fs.writeFileSync("app/data/friends.js", data, "UTF8");
    res.json(friends);
  });
};
