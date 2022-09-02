import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface IParticipant {
  name: string,
  onRemove: () => void
}

export function Participant({ name, onRemove }: IParticipant) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity
        onPress={onRemove}
        style={styles.btn}
      >
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}