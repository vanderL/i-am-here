import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  function handleParticipantAdd() {
    console.log('adicionou')
  }

  function handleParticipantRemove(name: string) {
    console.log(`removeu o ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 31 de Agosto de 2022</Text>

      <View style={styles.form}>
        <TextInput
          placeholder='Nome do particicipante'
          placeholderTextColor={'#6b6b6b'}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant
        name="Lima"
        onRemove={() => handleParticipantRemove("rodrigo")}
      />


    </View>
  )
}