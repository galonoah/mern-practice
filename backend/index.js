import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8000;

const MongoClient = mongodb.MongoClient;

MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  poolSize: 50,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  writeConcern: {
    wtimeout: 2500,
  },
})
  .catch((err) => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
