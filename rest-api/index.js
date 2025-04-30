import "dotenv/config"
import express from "express";
import userRoute from "./route/index.js";

const app = new express();

const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World from Express!');
  });

// Use middleware for parse request
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use(userRoute) 

app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT} `);
});  