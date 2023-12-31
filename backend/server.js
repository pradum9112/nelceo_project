require("dotenv").config();
const express = require("express");
const app = express();
const cardRouter = require("./routes/cardRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./DB_conn/conn");
// const DB_Conncetion = require("./DB_conn/conn");
// const url = process.env.DATABASE;
// DB_Conncetion(url);

app.use(cors());
app.use(express.json());
app.use(cardRouter.router);
app.use(bodyParser.json());

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server is start port number ${PORT}`);
});
