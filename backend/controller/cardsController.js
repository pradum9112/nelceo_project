const model = require("../model/card");
const CARD = model.CARD;

exports.createCard = async (req, res) => {
  try {
    const { author, width, height, url, download_url } = req.body;

    if (!author || !width || !height || !url || !download_url) {
      return res.status(422).json({ error: "Please fill all required fields" });
    }

    const newCard = new CARD({
      author,
      width,
      height,
      url,
      download_url,
    });

    await newCard.save();
    console.log(newCard);

    return res.status(201).json(newCard);
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};

exports.readAllCards = async (req, res) => {
  try {
    const Cards = await CARD.find();
    res.json(Cards);
  } catch (err) {
    console.log(err);
    res.status(400).json("failed", err);
  }
};

exports.readCard = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const Card = await CARD.findById(id);
    if (!Card) {
      return res.status(404).json({ error: "Card not found" });
    }
    res.status(201).json(Card);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.replaceCard = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCard = await CARD.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedCard) {
      return res.status(404).json({ message: "card not found" });
    }
    console.log(updatedCard);
    res.status(201).json(updatedCard);
  } catch (error) {
    res.status(422).json(error);
  }
};

exports.deleteCard = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteCard = await CARD.findByIdAndDelete(id);
    if (!deleteCard) {
      return res.status(404).json({ message: "card not found" });
    }
    console.log("deleted", deleteCard);
    res.status(201).json({ message: "deleted" });
  } catch (error) {
    res.status(422).json(error);
  }
};
