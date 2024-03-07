import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import Todo from './pages/Todo';
import { TodosProvider } from './context/TodosContext';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
  <TodosProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Todo" component={Todo} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  </TodosProvider>
  );
}
