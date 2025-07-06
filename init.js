const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Mongochat");
}
let allchats = [
  {
    from: "Simple",
    to: "Sushmita",
    msg: "Hey how are you doing?",
    created_at: new Date(),
  },
  {
    from: "Swetaki",
    to: "Pronay",
    msg: "What is the price of Iphone16?",
    created_at: new Date(),
  },
  {
    from: "Sneha",
    to: "Pragati",
    msg: "what are you doing?",
    created_at: new Date(),
  },
  {
    from: "puru",
    to: "Subham",
    msg: "send me 1k",
    created_at: new Date(),
  },
];

Chat.insertMany(allchats);


