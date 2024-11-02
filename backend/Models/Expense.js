const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  category: { type: String, required: true },
  receiptImage: { type: String }, // URL de l'image du reçu, optionnel
});

module.exports = mongoose.model("Expense", expenseSchema);
