import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tela from './src/screens/Login';
import RotaAtleta from './src/screens/RotaAtleta';
import RotaNutric from './src/screens/RotaNutric';
import AN from './src/screens/cadastroAN';
import CA from './src/screens/CadastroAtleta';
import CN from './src/screens/CadastroNut';
import EPA from './src/screens/screensAtleta/EditarPerfilAtleta';
import EPN from './src/screens/screensNutric/EditarPerfilNutric';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Tela} />
        <Stack.Screen name="PerfilAtleta" component={RotaAtleta} />
        <Stack.Screen name="PerfilNutric" component={RotaNutric} />
        <Stack.Screen name="AN" component={AN} />
        <Stack.Screen name="CA" component={CA} />
        <Stack.Screen name="CN" component={CN} />
        <Stack.Screen name="EPA" component={EPA} />
        <Stack.Screen name="EPN" component={EPN} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}