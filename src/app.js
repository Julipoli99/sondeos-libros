const express = require("express");
const app = express();
const router = express.Router();
const methodOverride = require("method-override");
const path = require("path");

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server running on port:", PORT)
})

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")))

app.use(require("./routes/mainRouter"))