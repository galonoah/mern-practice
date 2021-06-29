import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import RestaurantsDAO from "./dao/restaurantsDAO.js";
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
  .then(async (client) => {
    await RestaurantsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.stack);
    process.exit(1);
  });
