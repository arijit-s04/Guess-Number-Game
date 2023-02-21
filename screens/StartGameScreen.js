import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="numeric"
        autoCorrect={false}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton>Start</PrimaryButton>
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
