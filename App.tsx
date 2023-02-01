import {TailwindProvider} from 'tailwindcss-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider, Text} from 'react-native-paper';

import MainNavigator from './navigation/MainNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        {/* <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="StepForm" component={StepForm} />
          <Stack.Screen name="StartBooking" component={StartBookingScreen} />
          <Stack.Screen name="ConfirmLocation" component={ConfirmLocation} />
        </Stack.Navigator> */}
        <DrawerNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
