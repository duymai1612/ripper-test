import * as Font from 'expo-font';

export const loadFonts = async () => {
  try {
    await Font.loadAsync({
      'Inter-Regular': require('../../assets/fonts/Inter-Regular.ttf'),
      'Inter-SemiBold': require('../../assets/fonts/Inter-SemiBold.ttf'),
    });
    console.log('Fonts loaded successfully');
    return true;
  } catch (error) {
    console.error('Error loading fonts:', error);
    return false;
  }
};

export const fontFamilies = {
  regular: 'Inter-Regular',
  semiBold: 'Inter-SemiBold',
}; 