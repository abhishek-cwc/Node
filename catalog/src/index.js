import "dotenv/config"
import express from "express"

const app = new express();

const PORT = 3001 || process.env.PORT;

app.get("/", (req, res) => {
    res.json("In catalog...")
})

app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT} `);
})