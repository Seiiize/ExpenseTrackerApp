import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Assure-toi que cela pointe vers le bon port
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const createExpense = async (formData) => {
  try {
    const response = await api.post("/expenses", formData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de la dépense:", error);
    throw error;
  }
};

export const getExpenses = async () => {
  try {
    const response = await api.get("/expenses");
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des dépenses:", error);
    throw error;
  }
};
