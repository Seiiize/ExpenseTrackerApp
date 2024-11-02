import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const OrderScreen = () => {
  const [address, setAddress] = useState("");

  const handleOrder = () => {
    // Insérez ici la logique de votre commande
    console.log(`Commande passée pour l'adresse : ${address}`);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Passer une commande
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: "80%",
          marginTop: 20,
        }}
        onChangeText={(text) => setAddress(text)}
        value={address}
        placeholder="Entrez votre adresse"
      />
      <Button title="Commander" onPress={handleOrder} />
    </View>
  );
};

export default OrderScreen;
