//Your apiRoutes.js file should contain two routes.





//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "http://friend-finder.herokuapp.com/api/friends"));
});



//A POST routes /api/friends. This will be used to handle inocming survey results. This route will also be used to handle compatibility logic.

// Create New Friend - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newFriend = req.body;
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
});