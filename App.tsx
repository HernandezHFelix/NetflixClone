import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './src/navigation';
import useColorScheme from './src/hooks/useColorScheme';

const Stack = createNativeStackNavigator();

export default function App() {
  const color = useColorScheme();
  return (
    <SafeAreaProvider>
      <Navigation colorScheme={color} />
      <StatusBar  />
    </SafeAreaProvider>
  );
};