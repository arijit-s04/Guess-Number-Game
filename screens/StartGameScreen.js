import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/ui/Card";
import InstrutionText from "../components/ui/InstrutionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function StartGameScreen({ onNumberConfirm }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function inputChangeHandler(newValue) {
    setEnteredNumber(newValue);
  }

  function resetInput() {
    setEnteredNumber("");
  }

  function confirmInput() {
    const choseNum = parseInt(enteredNumber);

    if (isNaN(choseNum) || choseNum <= 0 || choseNum > 99) {
      Alert.alert("Invalid number", "Please enter a number between 0 and 99", [
        { text: "Okay", style: "default", onPress: resetInput },
      ]);
      return;
    }
    onNumberConfirm(choseNum);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my Number</Title>
      <Card>
        <InstrutionText>Enter a Number</InstrutionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="numeric"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={inputChangeHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmInput}>Start</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    flex: 1,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 75,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    borderBottomWidth: 2,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});

export default StartGameScreen;
