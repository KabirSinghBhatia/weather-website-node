const path = require("path");
const express = require("express");
const hbs = require("hbs");
if (process.env.NODE_ENV !== "production") require("dotenv").config();

// Requiring weather APIs
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 3000;

// Express config paths
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//////////////// Debug Lines
// console.log(__dirname);
// console.log(path.join(__dirname, "../public"));
////////////////

// Setup handlebars and views folder
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Kabir Singh Bhatia",
    index: true,
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", name: "Kabir Singh Bhatia" });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Kabir Singh Bhatia",
    message: "",
  });
});

app.get("/weather", (req, res) => {
  const { address } = req.query;
  if (!address) {
    return res.send({
      error: "Address not provided",
    });
  }

  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error });
    }
    forecast(latitude, longitude, (error, weatherData) => {
      if (error) return res.send({ error });

      res.send({
        weatherData,
        location,
        address,
      });
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "Error 404",
    name: "Kabir Singh Bhatia",
    errorMessage: "Help article page not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "Error 404",
    name: "Kabir Singh Bhatia",
    errorMessage: "Page Not Found",
  });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
