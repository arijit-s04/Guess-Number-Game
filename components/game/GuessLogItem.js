import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponents guess {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.primary800,
    borderRadius: 24,
    margin: 8,
    padding: 8,
    backgroundColor: Colors.accent500,
    justifyContent: 'space-between',
    elevation: 4,
  },
  itemText: {
    fontFamily: Fonts.productSansRegular
  }
});

export default GuessLogItem;
