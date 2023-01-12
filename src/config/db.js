import mongoose from "mongoose";

mongoose.connect('mongodb+srv://pepz1n:123@nodeexpress.tedwrej.mongodb.net/Alura-Node');

let db = mongoose.connection;

export default db