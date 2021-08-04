import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeNames';

const DrawerNavigator = () => {
  const DrawerStack = createDrawerNavigator();
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </DrawerStack.Navigator>
  );
};

export default DrawerNavigator;
