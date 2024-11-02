import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import AddExpense from "../images/add_expense.png"; // Exemple d'image pour ajouter une dépense
import ViewExpenses from "../images/view_expenses.png"; // Exemple d'image pour voir les dépenses

const HomeScreen = ({ navigation }) => {
  const options = [
    {
      label: "Ajouter une Dépense",
      logo: AddExpense,
      screen: "AddExpenseScreen",
      color: "#092635",
    },
    {
      label: "Voir les Dépenses",
      logo: ViewExpenses,
      screen: "ExpensesScreen",
      color: "#1B4242",
    },
  ];

  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require("../images/logo.png")} />
      <Text style={styles.title}>Suivi des Dépenses</Text>
      <View style={styles.grid}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.card, { borderColor: option.color }]}
            onPress={() => navigation.navigate(option.screen)}
          >
            <Image style={styles.logocards} source={option.logo} />
            <Text style={styles.textcards}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card: {
    margin: 10,
    padding: 20,
    backgroundColor: "white",
    opacity: 0.8,
    width: "40%",
    height: 200,
    borderRadius: 30,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tinyLogo: {
    height: 100,
    width: 100,
    marginTop: 70,
  },
  logocards: {
    height: 50,
    width: 50,
  },
  textcards: {
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#80BCBD",
    margin: 20,
  },
});

export default HomeScreen;
