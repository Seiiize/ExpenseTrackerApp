import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const ParticulierLoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Ajoutez ici la logique de connexion pour le particulier
    console.log("Username:", username);
    console.log("Password:", password);
    // Exemple : Naviguer vers la page d'accueil après la connexion
    navigation.navigate("Accueil");
  };

  const handleSignUp = () => {
    // Ajoutez ici la logique pour naviguer vers la page d'inscription du particulier
    // Par exemple : navigation.navigate("ParticulierSignUp");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion Particulier</Text>
      <Text style={styles.subtitle}>Bienvenue sur Recyclini</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Nom d'utilisateur"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Mot de passe"
        secureTextEntry
      />
      <Button title="Se connecter" onPress={handleLogin} />
      <Button title="S'inscrire" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default ParticulierLoginScreen;
