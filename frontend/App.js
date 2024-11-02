import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen.js";
import AddExpenseScreen from "./Screens/AddExpenseScreen.js"; // Importe ton nouvel écran
import ExpensesScreen from "./Screens/ExpensesScreen.js";
import ExpensesCalendar from "./Screens/ExpensesCalendar.js";
import AboutScreen from "./Screens/AboutScreen";
import LoginScreen from "./Screens/LoginScreen"; // Assure-toi d'avoir cet écran de connexion
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Simule la vérification de l'état de connexion
    // Remplace ceci par ta logique de vérification
    const checkLoginStatus = async () => {
      // Par exemple, vérifier le stockage local
      const status = true; // Par défaut, non connecté
      setIsLoggedIn(status);
    };

    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Main"
              component={MainNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddExpenseScreen"
              component={AddExpenseScreen} // Ajoute l'écran ici
              options={{ headerShown: true, title: "Ajouter une Dépense" }}
            />
            <Stack.Screen
              name="ExpensesScreen"
              component={ExpensesScreen} // Ajoute l'écran ici
              options={{ headerShown: true, title: "Voir les Dépenses" }}
            />
            {/* Ajoute d'autres écrans ici si nécessaire */}
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00B1AB",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarTransitionPreset: "fade",
        tabBarPressColor: "rgba(0, 0, 0, 0.5)",
        tabBarPressOpacity: 0.5,
        tabBarStyle: {
          display: "flex",
          backgroundColor: "#F0FAF9",
          position: "absolute",
          borderRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Commande"
        component={ExpensesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="truck-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Boutique"
        component={ExpensesCalendar}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="À propos"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="information-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
