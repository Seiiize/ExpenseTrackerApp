import axios from "axios";
import { Buffer } from "buffer";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { createExpense } from "../Services/api"; // Importe la méthode API
const AddExpenseScreen = ({ navigation }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [category, setCategory] = useState("");
  const [receiptImage, setReceiptImage] = useState(null);

  const categories = [
    "Nourriture",
    "Transport",
    "Logement",
    "Loisirs",
    "Autres",
  ];

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const showImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setReceiptImage(result.assets[0].uri);
    }
  };

  const handleSaveExpense = async () => {
    const formData = new FormData();
    formData.append("description", description);
    formData.append("amount", parseFloat(amount));
    formData.append("date", date.toISOString());
    formData.append("category", category);

    if (receiptImage) {
      const base64Str = receiptImage.split(",")[1]; // Suppression de la partie préfixe data:image/jpeg;base64,
      const imageBuffer = Buffer.from(base64Str, "base64");
      const blob = new Blob([imageBuffer], { type: "image/jpeg" });
      formData.append("receiptImage", blob);
    }

    try {
      await createExpense(formData); // Appel à l'API pour créer une dépense
      navigation.goBack();
    } catch (error) {
      console.error("Erreur lors de la sauvegarde de la dépense:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une Dépense</Text>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Montant"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.datePickerButton}
      >
        <Text style={styles.datePickerText}>
          Sélectionner la Date: {date.toLocaleDateString()}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <Text style={styles.label}>Catégorie:</Text>
      {categories.map((cat, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.categoryButton,
            category === cat && styles.selectedCategoryButton,
          ]}
          onPress={() => setCategory(cat)}
        >
          <Text style={styles.categoryButtonText}>{cat}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        onPress={showImagePicker}
        style={styles.imagePickerButton}
      >
        <Text style={styles.imagePickerText}>Ajouter une photo du reçu</Text>
      </TouchableOpacity>
      {receiptImage && (
        <Image source={{ uri: receiptImage }} style={styles.receiptImage} />
      )}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveExpense}>
        <Text style={styles.saveButtonText}>Sauvegarder</Text>
      </TouchableOpacity>
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
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 20,
  },
  datePickerButton: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginBottom: 20,
  },
  datePickerText: {
    color: "#333",
  },
  label: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
  categoryButton: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedCategoryButton: {
    backgroundColor: "#80BCBD",
  },
  categoryButtonText: {
    color: "#333",
  },
  imagePickerButton: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    marginBottom: 20,
  },
  imagePickerText: {
    color: "#333",
  },
  receiptImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  saveButton: {
    padding: 15,
    backgroundColor: "#00B1AB",
    borderRadius: 5,
  },
  saveButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default AddExpenseScreen;
