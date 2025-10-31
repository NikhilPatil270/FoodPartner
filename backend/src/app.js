//create server
const express = require("express");
const app = express(); //server instance is created

const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const foodRoutes = require("./routes/food.routes");
const foodPartnerRoutes = require("./routes/food-partner.routes");
const cors= require("cors");

app.use(cors({
  origin:'http://localhost:5173',
  credentials:true,
}))

app.use(express.json()); //middleware to parse json data ,basically it bring data into req.body
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/food-partner", foodPartnerRoutes);

module.exports = app;