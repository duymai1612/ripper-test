import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './services/constants/ThemeContext';
import { ToastProvider } from './services/constants/ToastContext';
import { loadFonts } from './services/constants/fonts';
import { View, Text, ActivityIndicator } from 'react-native';
import Login from './app/login';
import Home from './app/home';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState<string | null>(null);

  useEffect(() => {
    const loadAppFonts = async () => {
      try {
        console.log('Starting font loading process...');
        const result = await loadFonts();
        console.log('Font loading completed:', result);
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error in App.tsx loading fonts:', error);
        setLoadingError(error instanceof Error ? error.message : 'Unknown font loading error');
        // Proceed anyway if fonts fail to load
        setFontsLoaded(true);
      }
    };

    loadAppFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#FF8C38" />
        <Text style={{ marginTop: 16 }}>Loading assets...</Text>
        {loadingError && (
          <Text style={{ marginTop: 8, color: 'red', padding: 16, textAlign: 'center' }}>
            {loadingError}
          </Text>
        )}
      </View>
    );
  }

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
