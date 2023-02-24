import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Fonts from "../constants/fonts";

const GameOverScreen = ({ userNumber, guessRounds, onStartNew }) => {
  return (
    <View style={styles.screen}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        You phone took <Text style={styles.highlight}>{guessRounds}</Text> rounds to guess{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNew}>Start New game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: Fonts.productSansRegular,
    fontSize: 20,
    textAlign: "center",
  },
  highlight: {
    fontFamily: Fonts.productSansBold,
    color: Colors.primary800,
  },
});

export default GameOverScreen;
