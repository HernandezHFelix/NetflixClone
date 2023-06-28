import * as React from 'react';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {Button, Image} from 'react-native';

import colors from '../constants/colors';
import useColorScheme from '../hooks/useColorScheme';
import homeScreen from '../screens/homeScreen';
import movieDetailsScreen from '../screens/movieDetailScreen';
import tabTwoScreen from '../screens/tabTwoScreen';
import { BottomTabParamList, HomeParamList, TabTwoParamList } from './typesNavigation';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const HomeStack = createStackNavigator<HomeParamList>();
const TabTwoStack = createStackNavigator<TabTwoParamList>();


const BottomTabNavigator = () =>{
    const colorScheme = useColorScheme();
    return(
        <BottomTab.Navigator
            initialRouteName = 'Home'
            tabBarOptions={{ activeTintColor: colors[colorScheme].tint }}
            screenOptions={{ headerShown: false }}
            >
            <BottomTab.Screen
                name='Home'
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Coming_Soon"
                component={TabTwoNavigator}
                options={{
                  tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={TabTwoNavigator}
                options={{
                  tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Downloads"
                component={TabTwoNavigator}
                options={{
                  tabBarIcon: ({ color }) => <AntDesign  name='download' size={24} color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
};

function logoTitle (){
  return(
    <Image
      style={{ width: 50, height: 50 }}
      source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie1.jpg'}}
    />
  );
};

function TabOneNavigator() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
            name="HomeScreen"
            component={homeScreen}
            options={{ 
              //headerShown: false,
              headerTitle: (props) => ( // App Logo
                <Image
                  style={{ width: 40, height: 40, alignItems:'flex-start' }}
                  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCsYHGTcSkHllWd5aIg2YzDBCl6ilom_P1w&usqp=CAU'}}
                />
              ),
            }}
            
        />
        <HomeStack.Screen
            name="MovieDetailsScreen"
            component={movieDetailsScreen}
            options={{ 
                title: ''
           }}
        />
      </HomeStack.Navigator>
    );
  }

function TabTwoNavigator() {
    return (
      <TabTwoStack.Navigator>
        <TabTwoStack.Screen
          name="TabTwoScreen"
          component={tabTwoScreen}
          options={{ headerTitle: 'Tab Two Title' }}
        />
      </TabTwoStack.Navigator>
    );
  }

export default BottomTabNavigator;