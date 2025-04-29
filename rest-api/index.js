import "dotenv/config"
import express from "express";

const app = new express();

const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World from Express!');
  });

app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT} `);
});  