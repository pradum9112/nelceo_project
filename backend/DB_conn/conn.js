const mongoose = require("mongoose");

const url = process.env.DATABASE;

main().catch((err) => console.log("Error in connecting to MongoDB:", err));

async function main() {
  await mongoose.connect(url);
  console.log("Connected to MongoDB");
}

// mongoose
//   .connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })

//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.log("Error in connecting to MongoDB:", error));

// module.exports = async (url) => {
//   try {
//     await mongoose.connect(url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error in connecting to MongoDB:", error.message);
//   }
// };
