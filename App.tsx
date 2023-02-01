import {TailwindProvider} from 'tailwindcss-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider, Text} from 'react-native-paper';
import StartBookingScreen from './screens/Startbooking';
import ConfirmLocation from './screens/ConfirmLocation';
import LoginScreen from './screens/LoginScreen';
import Signup from './screens/Signup';
import StepForm from './screens/StepForm';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>
      <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="StepForm" component={StepForm} />
            <Stack.Screen name="StartBooking" component={StartBookingScreen} />
            <Stack.Screen name="ConfirmLocation" component={ConfirmLocation} />
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </PaperProvider>
  );
}

export default App;
