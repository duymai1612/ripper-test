import * as Font from 'expo-font';

export const loadFonts = async () => {
  try {
    console.log('Starting font loading process...');
    
    // Load fonts one by one to isolate issues
    await Font.loadAsync({
      'Inter-Regular': require('../../assets/fonts/Inter-Regular.ttf'),
    });
    console.log('Inter-Regular loaded successfully');
    
    await Font.loadAsync({
      'Inter-SemiBold': require('../../assets/fonts/Inter-SemiBold.ttf'),
    });
    console.log('Inter-SemiBold loaded successfully');
    
    console.log('Font loading completed successfully');
    return true;
  } catch (error) {
    console.error('Error loading fonts:', error);
    // If font loading fails, continue with app but return false
    return false;
  }
};

export const fontFamilies = {
  regular: 'Inter-Regular',
  semiBold: 'Inter-SemiBold',
}; 