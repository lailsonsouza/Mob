//Questão 1
import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);

  return(
    <View style={styles.container}>
      <Text>Você clicou {count} vez(es)</Text>
      <Button
        title="Clique Aqui"
        onPress={() => {
        setCount(count + 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});