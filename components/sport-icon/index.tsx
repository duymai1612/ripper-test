import React, { FC } from 'react';
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { SportIconProps } from './types';
import { useTheme } from '../../services/constants/ThemeContext';

const SportIcon: FC<SportIconProps> = ({
  sport,
  size = 24,
  color,
  style,
}) => {
  const { colors } = useTheme();
  const iconColor = color || colors.text;

  const getIconPath = () => {
    switch (sport) {
      case 'Dance':
        return 'M13.5,5.5c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S12.4,5.5,13.5,5.5z M20,12.5V10c0-1.1-0.9-2-2-2h-3l-2.9-3.9 C11.8,3.5,11.1,3,10.3,3H3.5C2.7,3,2,3.7,2,4.5v8C2,13.3,2.7,14,3.5,14h5l0,0l3,4l0,0c0.2,0.3,0.5,0.5,0.8,0.5c0.3,0,0.5,0,0.7-0.1 l4-2C18.2,15.9,19,14.7,19,13.3V12c0-0.6-0.4-1-1-1s-1,0.4-1,1v1.3c0,0.5-0.2,0.9-0.6,1.1L13,15.5l-1.7-2.3c0.3-0.3,0.5-0.7,0.5-1.2 c0-0.8-0.7-1.5-1.5-1.5S8.8,11.2,8.8,12s0.7,1.5,1.5,1.5c0.1,0,0.2,0,0.3,0l2.2,3h-7.3v-7h6.6L15,9.7c0.2,0.2,0.4,0.3,0.7,0.3H18v2.5 C18,13.3,18.7,14,19.5,14S21,13.3,21,12.5V12c0-0.6-0.4-1-1-1S19,11.4,19,12v0.5L20,12.5z';
      case 'Yoga':
        return 'M13,2c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3C16,3.34,14.66,2,13,2z M13,11c-4.1,0-6.8,2.2-7.7,5.8l2.4,0.8 C8.5,14.9,10.4,13,13,13c2.6,0,4.5,1.9,5.3,4.6l2.4-0.8C19.8,13.2,17.1,11,13,11z';
      case 'Archery':
        return 'M12.02,10.18v3.72l3.74-1.81l-1.93-1.91L12.02,10.18z M4.31,3.17l2.09,2.09l5.59,5.59l1.95-1.95 L7.4,3.16L5.44,1.2L4.31,3.17z M19.42,6.13L21.7,8.4c0.39,0.39,0.39,1.02,0,1.41l-2.08,2.08c-0.39,0.39-1.02,0.39-1.41,0l-0.87-0.87 l-2.02,2.01l6.63,6.63c0.57,0.57,0.57,1.48,0,2.05c-0.57,0.57-1.49,0.57-2.05,0L6.31,8.15l2.02-2.02L7.5,5.28 c-0.39-0.39-0.39-1.02,0-1.41L9.58,1.8c0.39-0.39,1.02-0.39,1.41,0l2.28,2.28l2.04-2.02c0.94-0.94,2.43-1.1,3.55-0.4 c1.35,0.85,1.67,2.62,0.78,3.91l-0.23,0.35L19.42,6.13z';
      case 'Acrobatics':
        return 'M13,2c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3C16,3.34,14.66,2,13,2z M18.56,13c-0.94-1-2.18-1.71-3.56-2V9.5 c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1V11c-1.38,0.29-2.63,1-3.56,2c-0.93,1-1.44,2.33-1.44,3.69V21h2v-4.31 c0-0.93,0.39-1.77,1-2.42V21h2v-7h2v7h2v-6.73c0.61,0.65,1,1.49,1,2.42V21h2v-4.31C20,15.33,19.49,14,18.56,13z';
      default:
        return '';
    }
  };

  return (
    <View style={style}>
      <Svg width={size} height={size} viewBox="0 0 24 24">
        <Path
          d={getIconPath()}
          fill={iconColor}
        />
      </Svg>
    </View>
  );
};

export default SportIcon; 