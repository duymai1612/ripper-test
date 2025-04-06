import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './services/constants/ThemeContext';
import { ToastProvider } from './services/constants/ToastContext';
import Login from './app/login';
import Home from './app/home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ToastProvider>
          <NavigationContainer>
            <Stack.Navigator 
              initialRouteName="Login" 
              screenOptions={{ 
                headerShown: false,
                contentStyle: { backgroundColor: 'transparent' }
              }}
            >
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
          </NavigationContainer>
        </ToastProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
