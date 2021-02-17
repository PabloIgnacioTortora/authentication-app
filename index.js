const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// Config dotev
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: ".env" });
  console.log(process.env.NODE_ENV);
}
const app = express();
// Load routes
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
// Connect to database
connectDB();
// MIDDLEWEARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
//Carpeta estatica
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "client/build/index.html"))
);
// Use Routes
app.use("/api", authRouter);
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("Invalid endpoint");
});
app.use((req, res) => {
  res.status(404).json({
    success: false,
    msg: "Page not found",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
