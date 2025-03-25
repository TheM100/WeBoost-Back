require("dotenv").config(); //metodo para invocar variables de desarrollo
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;

const routes = require('./src/routes/routes')

const allowedOrigins = [
  "http://localhost:3001",
  "http://localhost:3000",
  "https://sunrise-adventure-in-magbay.vercel.app"
  
];



app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);


app.use(express.json());



app.get("/", (req, res) => {
  res.send({ msg: "This is Home compa alv" });
});

app.use("/sendmsg", routes);




app.listen(PORT, () => {
    console.log("server is ready in port " + PORT);
  });