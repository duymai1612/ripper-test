import { SportType } from '../../services/types';
import { ViewStyle } from 'react-native';

export interface SportIconProps {
  sport: SportType;
  size?: number;
  color?: string;
  style?: ViewStyle;
} 