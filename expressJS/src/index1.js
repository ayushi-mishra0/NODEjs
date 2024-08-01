const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = 3000;

// Build the path for static files
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname,"../template");
const partialsPath = path.join(__dirname,"../templates/partials");

// Set the view engine to hbs
app.set("view engine", "hbs");
app.set('views',templatePath);
hbs.registerPartials(partialsPath);
// Set the views directory (if necessary)
// app.set("views", path.join(__dirname, "../views"));
 
// Serve static files from the public directory
app.use(express.static(staticPath));

// Route to render the index view
app.get("/", (req, res) => {
    res.render('index');
});

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
