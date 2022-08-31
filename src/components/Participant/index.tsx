import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Particpant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Vandão</Text>

      <TouchableOpacity
        style={styles.btn}
      >
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}