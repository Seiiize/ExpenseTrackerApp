import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { getExpenses } from "../Services/api"; // Importe la méthode API

const ExpensesScreen = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getExpenses();
        setExpenses(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des dépenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.amount}>€{item.amount}</Text>
      <Text style={styles.date}>
        {new Date(item.date).toLocaleDateString()}
      </Text>
      {item.receiptImage && (
        <Image
          source={{ uri: `http://localhost:5000/${item.receiptImage}` }} // URL correcte pour l'image
          style={styles.receiptImage}
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dépenses</Text>
      <FlatList
        data={expenses}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#80BCBD",
    marginBottom: 20,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  description: {
    fontSize: 18,
    color: "#333",
  },
  amount: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  date: {
    fontSize: 14,
    color: "#999",
    marginTop: 4,
  },
  receiptImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginTop: 10,
  },
});

export default ExpensesScreen;
