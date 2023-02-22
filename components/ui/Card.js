import { StyleSheet, View } from 'react-native'
import Colors from '../../constants/colors'

function Card(props) {
  return (
    <View style={styles.card}>{props.children}</View>
  )
}
const styles = StyleSheet.create({
  card: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginTop: 48,
    marginHorizontal: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 8,
    alignItems: "center",
    justifyContent: "center",
  },
})
export default Card