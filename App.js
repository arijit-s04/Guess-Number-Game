import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "product-sans": require("./assets/fonts/Product-Sans-Regular.ttf"),
    "product-sans-bold": require("./assets/fonts/Product-Sans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function numberConfirmHandler(newNum) {
    setUserNumber(newNum);
    setGameOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameOver(true);
    setGuessRounds(numberOfRounds)
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onNumberConfirm={numberConfirmHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (isGameOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} guessRounds={guessRounds} onStartNew={startNewGameHandler} />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
      onLayout={onLayoutRootView}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.2 }}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
