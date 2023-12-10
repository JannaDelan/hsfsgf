import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colorBackgroundTheme } from '../theme';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const onSignUp = () => {
    navigation.navigate("SignUp");
  };

  const onLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground source={require("../assets/images/img.png")} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.container}>
        <Image source={require("../assets/images/woa.png")} style={styles.logo} />

        <Text style={styles.title}>Welcome</Text>
        {/* Centering the subtitle */}
        <Text style={[styles.subtitle, { textAlign: "center" }]}>Coffee LOVERS</Text>

        <TouchableOpacity style={styles.button} onPress={onSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={onLogin}>
            <Text style={styles.loginLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    padding: 20,
    backgroundColor: "transparent", // Semi-transparent black background
    borderRadius: 5,
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "black",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginText: {
    color: "black",
    fontWeight: "bold",
  },
  loginLink: {
    fontWeight: "bold",
    color: "blue",
    marginLeft: 5,
  },
});

export default WelcomeScreen;
