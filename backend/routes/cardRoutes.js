const express = require("express");
const cardController = require("../controller/cardsController");
const router = express.Router();

router
  .post("/createcard", cardController.createCard)
  .get("/readallcard", cardController.readAllCards)
  .get("/readcard/:id", cardController.readCard)
  .put("/editcard/:id", cardController.replaceCard)
  // .patch("/card:id", cardController.updateCard)
  .delete("/deletecard/:id", cardController.deleteCard);

exports.router = router;
