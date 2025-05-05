import "dotenv/config"
import express from "express"
import productRoute from "./route/index.js";


const app = new express();

const PORT = 3001 || process.env.PORT;

// Use middleware for parse request
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use(productRoute)

app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT} `);
})