import {createDrawerNavigator} from '@react-navigation/drawer';

import {Image} from 'react-native';

import MainNavigator from './MainNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={MainNavigator} />
      <Drawer.Screen name="Bookings" component={MainNavigator} />
      <Drawer.Screen name="Vehicles" component={MainNavigator} />
      <Drawer.Screen name="Account" component={MainNavigator} />
    </Drawer.Navigator>
  );
}
