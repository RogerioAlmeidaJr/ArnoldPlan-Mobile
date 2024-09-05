import { Text, StyleSheet, View, Pressable} from 'react-native';

export default function TelaInicial({ navigation }) {
  return (
    <View style = {styles.centralizaView}>
      <View style = {styles.container}>
        <Text style = {styles.title}>EDITAR PERFIL</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('PerfilNutric')}>
          <Text style={styles.text}>SALVAR</Text>
        </Pressable>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: '90%',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 10,
  },
  centralizaView: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'top',
    padding: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    elevation: 3,
    backgroundColor: 'blue',
    width: '100%',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});