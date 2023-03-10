import { StyleSheet, Text } from 'react-native'
import Fonts from '../../constants/fonts';

const Title = ({ children }) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.productSansBold,
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    width: 300,
    maxWidth: "80%"
  }
});

export default Title