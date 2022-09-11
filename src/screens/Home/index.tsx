import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome")
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('')
    console.log(participants)
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name} ?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])

  }

  // function handleChangeParticipant(event) {
  //   setParticipantName(event.target.value)
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 31 de Agosto de 2022</Text>

      <View style={styles.form}>
        <TextInput
          placeholder='Nome do particicipante'
          placeholderTextColor={'#6b6b6b'}
          style={styles.input}
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => handleParticipantAdd()}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text
            style={styles.listEmptyText}
          >
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />


    </View>
  )
}