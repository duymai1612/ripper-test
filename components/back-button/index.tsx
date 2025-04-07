import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { useTheme } from '../../services/constants/ThemeContext';

interface BackButtonProps {
  onPress?: () => void;
}

const BackButton: FC<BackButtonProps> = ({ onPress }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Svg width={24} height={24} viewBox="0 0 24 24">
        <Path
          d="M20,11H7.83l5.59-5.59L12,4l-8,8l8,8l1.41-1.41L7.83,13H20V11z"
          fill={colors.text}
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});

export default BackButton; 