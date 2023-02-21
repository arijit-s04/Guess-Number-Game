import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({onNumberConfirm}) {

  const [enteredNumber, setEnteredNumber] = useState('');

  function inputChangeHandler(newValue) {
    setEnteredNumber(newValue);
  }

  function resetInput() {
    setEnteredNumber('');
  }

  function confirmInput() {
    const choseNum = parseInt(enteredNumber);

    if(isNaN(choseNum) || choseNum <= 0 || choseNum > 99) {
      Alert.alert(
        'Invalid number',
        "Please enter a number between 0 and 99",
        [{ text: 'Okay', style: 'default', onPress: resetInput}]
      )
      return;
    }
    onNumberConfirm(choseNum);
  }

  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginTop: 100,
    marginHorizontal: 16,
    backgroundColor: "#38021d",
    borderRadius: 8,
    elevation: 8,
    alignItems: "center",
    justifyContent: 'center'
  },
  numberInput: {
    height: 50,
    width: "30%",
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    borderBottomWidth: 2,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});

export default StartGameScreen;
