import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 24,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.accent500,
    borderRadius: 8,
    borderWidth: 3
  },
  number: {
    color: Colors.accent500,
    fontSize: 28,
    fontFamily: Fonts.productSansBold,
  }
});

export default NumberContainer;
