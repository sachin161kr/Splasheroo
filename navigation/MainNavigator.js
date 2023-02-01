import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import Signup from '../screens/Signup';
import StepForm from '../screens/StepForm';
import StartBookingScreen from '../screens/Startbooking';
import ConfirmLocation from '../screens/ConfirmLocation';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="StepForm" component={StepForm} />
      <Stack.Screen name="StartBooking" component={StartBookingScreen} />
      <Stack.Screen name="ConfirmLocation" component={ConfirmLocation} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
