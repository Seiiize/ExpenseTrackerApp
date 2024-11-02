import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Logique de connexion
    console.log("Login avec:", email, password);
    navigation.navigate("Main");
  };

  const handleSignup = () => {
    // Logique d'inscription
    console.log("Inscription avec:", email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ExpenseMaster</Text>
      <Text style={styles.tagline}>
        Gérez vos dépenses de manière intelligente et simple avec ExpenseMaster!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se Connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#80BCBD",
    marginBottom: 20,
  },
  tagline: {
    fontSize: 18,
    textAlign: "center",
    color: "#80BCBD",
    marginBottom: 30,
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00B1AB",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default LoginScreen;
