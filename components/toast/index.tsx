import React, { FC, useEffect } from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';
import { ToastProps } from './types';
import { createStyles } from './styles';
import { useTheme } from '../../services/constants/ThemeContext';

const Toast: FC<ToastProps> = ({
  message,
  type = 'info',
  visible,
  onDismiss,
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  
  const opacity = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          onDismiss();
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible, opacity, onDismiss]);

  if (!visible) return null;

  return (
    <Animated.View style={[
      styles.container,
      styles[type],
      { opacity }
    ]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

export default Toast; 