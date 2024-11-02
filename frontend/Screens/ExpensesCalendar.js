import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { getExpenses } from "../Services/api"; // Importer la fonction de récupération

const ExpensesCalendar = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [expenses, setExpenses] = useState({});

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const expensesData = await getExpenses();
        console.log("Données récupérées:", expensesData); // Log les données récupérées
        const expensesByDate = expensesData.reduce((acc, expense) => {
          const date = expense.date.split("T")[0]; // Formater la date pour ne garder que la partie yyyy-MM-dd
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push({ name: expense.description, amount: expense.amount }); // Utiliser expense.description pour le nom
          return acc;
        }, {});
        setExpenses(expensesByDate);
        console.log("Données formatées:", expensesByDate); // Log les données formatées
      } catch (error) {
        console.error("Erreur lors de la récupération des dépenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  const renderItem = (item, index) => {
    return (
      <View key={index} style={styles.item}>
        <Text>
          {item.name}: €{item.amount}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          console.log("Date sélectionnée:", day.dateString); // Log la date sélectionnée
        }}
        markedDates={{
          ...Object.keys(expenses).reduce((acc, date) => {
            acc[date] = { marked: true, dotColor: "blue" };
            return acc;
          }, {}),
          [selectedDate]: { selected: true, selectedColor: "red" },
        }}
      />
      <View style={styles.expensesList}>
        {expenses[selectedDate] ? (
          expenses[selectedDate].map((expense, index) =>
            renderItem(expense, index)
          )
        ) : (
          <Text style={styles.noExpenses}>Aucune dépense pour ce jour</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
  },
  expensesList: {
    margin: 20,
  },
  noExpenses: {
    textAlign: "center",
    color: "#999",
    marginTop: 20,
  },
});

export default ExpensesCalendar;
