import "dotenv/config"
import express from "express";
import userRoute from "./Route/index.js";

const app = new express();

const PORT = 3000 || process.env.PORT;

// Use middleware for parse request
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Use middleware for routing
app.use(userRoute) 

app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT} `);
});  