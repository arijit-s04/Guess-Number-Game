import { useEffect, useMemo, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstrutionText from "../components/ui/InstrutionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { Ionicons } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const firstNum = useMemo(() => {
    return generateRandomBetween(minBoundary, maxBoundary, userNumber);
  }, [userNumber]);
  const [generatednum, setGeneratednum] = useState(firstNum);

  useEffect(() => {
    if (generatednum === userNumber) {
      onGameOver();
    }
  }, [generatednum, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && userNumber > generatednum) ||
      (direction === "greater" && userNumber < generatednum)
    ) {
      Alert.alert("Wrong hint", "Do not cheat, play fairly!!!", [
        { text: "Sorry" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = generatednum;
    } else {
      minBoundary = generatednum + 1;
    }
    const rnewNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      generatednum
    );
    setGeneratednum(rnewNum);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{generatednum}</NumberContainer>
      <Card>
        <InstrutionText style={styles.instructiontext}>
          Higher or Lower?
        </InstrutionText>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 36,
  },
  instructiontext: {
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});

export default GameScreen;
