import { View, Text, Pressable, StyleSheet } from "react-native";
function PrimaryButton({ children }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#610633" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 8,
    overflow: "hidden",
    borderRadius: 28,
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#72063c",
    elevation: 6,
    alignItems: 'center'
  },
  buttonText: {
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
