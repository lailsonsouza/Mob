// Questão 3
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.quadrado}>
          <Text style={styles.escrita}>Quadrado 1</Text>
        </View>
        <View style={styles.quadrado}>
          <Text style={styles.escrita}>Quadrado 2</Text>
        </View>
        <View style={styles.quadrado}>
          <Text style={styles.escrita}>quadrado 3</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  
    
  },
  quadrado: {
    backgroundColor: 'skyblue',
    width: 80,
    height: 80,
    justifyContent: 'center'
  },
  escrita:{
    fontSize:13,
    textAlign: 'center',
    
  }
});
