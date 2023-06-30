import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from './typesNavigation';
import linkingConfiguration from './linkingConfiguration'
import bottomTabNavigator from './bottomTabNavigator';
import welcome from '../screens/welcome';

/*{colorScheme}: {colorScheme: ColorSchemeName}*/
function Navigation ({colorScheme}: {colorScheme: ColorSchemeName}){
    return(
        <NavigationContainer
            linking={ linkingConfiguration }
            theme={DarkTheme}
            >
            <RootNavigator />
        </NavigationContainer>
    );
};

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Root" component={bottomTabNavigator} />
          <Stack.Screen name="NotFound" component={welcome} options={{ title: 'Welcome Netflix' }} />
        </Stack.Navigator>
    );
}

export default Navigation;

