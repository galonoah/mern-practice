const express = require("express");
const connectDB = require("./config/db");
const books = require('./routes/api/books');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: true}));

app.get("/", (req, res) => res.send("Hello World"));

//Use Routes
app.use('/api/books', books);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
