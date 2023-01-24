import ListCharacter from "./src/screens/listCharacters";
import { Provider } from 'react-redux'
import { store } from "./src/redux/store";
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DetailOfCharacter from "./src/screens/detailOfCharacter";

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={ListCharacter} />
      <Stack.Screen name="Detail" component={DetailOfCharacter} />
    </Stack.Navigator>
  );
}

export default function App() {
  return <Provider store={store}>
   <NavigationContainer>
    <MyStack />
   </NavigationContainer>

  </Provider>

}