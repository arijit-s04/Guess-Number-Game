import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

function InstrutionText({ children, style }) {
  return <Text style={[styles.label, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontFamily: Fonts.productSansRegular,
    fontSize: 24,
    color: Colors.accent500,
  },
});

export default InstrutionText;
