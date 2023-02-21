import { View, Text, Pressable, StyleSheet } from "react-native";
import PropTypes from 'prop-types';
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary600 }}
        onPress={onPress}
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
    backgroundColor: Colors.primary500,
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

PrimaryButton.propTypes = {
  onPress: PropTypes.func
}

export default PrimaryButton;
