import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const AboutScreen = ({ navigation }) => {
  const user = {
    name: "John Doe",
    totalExpenses: 1234.56,
  };

  const handleLogout = () => {
    // Ajoute ici la logique de déconnexion
    console.log("User logged out");
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      <View style={styles.profileContainer}>
        <Text style={styles.label}>Nom :</Text>
        <Text style={styles.value}>{user.name}</Text>
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.label}>Total des Dépenses :</Text>
        <Text style={styles.value}>€{user.totalExpenses}</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Se Déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#80BCBD",
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    color: "#333",
    marginRight: 10,
  },
  value: {
    fontSize: 18,
    color: "#666",
  },
  logoutButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#FF5733",
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default AboutScreen;
