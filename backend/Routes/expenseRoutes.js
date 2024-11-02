const express = require("express");
const Expense = require("../Models/Expense");
const multer = require("multer");
const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Créer une dépense
router.post("/expenses", upload.single("receiptImage"), async (req, res) => {
  const { description, amount, date, category } = req.body;
  const receiptImage = req.file ? req.file.path : null;

  try {
    const newExpense = new Expense({
      description,
      amount,
      date,
      category,
      receiptImage,
    });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtenir toutes les dépenses
router.get("/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Mettre à jour une dépense
router.put("/expenses/:id", upload.single("receiptImage"), async (req, res) => {
  const { description, amount, date, category } = req.body;
  const receiptImage = req.file ? req.file.path : null;

  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) return res.status(404).json({ message: "Expense not found" });

    expense.description = description;
    expense.amount = amount;
    expense.date = date;
    expense.category = category;
    if (receiptImage) {
      fs.unlinkSync(expense.receiptImage); // Supprimer l'ancienne image
      expense.receiptImage = receiptImage;
    }

    await expense.save();
    res.json(expense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Supprimer une dépense
router.delete("/expenses/:id", async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) return res.status(404).json({ message: "Expense not found" });

    if (expense.receiptImage) {
      fs.unlinkSync(expense.receiptImage); // Supprimer l'image associée
    }

    await expense.remove();
    res.json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
