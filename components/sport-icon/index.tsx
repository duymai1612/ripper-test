import React from 'react';
import { SvgXml } from 'react-native-svg';
import { ViewStyle } from 'react-native';

// Import SVG files directly
import DanceIcon from '../../assets/icons/dance.svg';
import YogaIcon from '../../assets/icons/yoga.svg';
import ArcheryIcon from '../../assets/icons/archery.svg';
import AcrobaticsIcon from '../../assets/icons/acrobatics.svg';

type Sport = 'Dance' | 'Yoga' | 'Archery' | 'Acrobatics';

interface SportIconProps {
  sport: Sport;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

const SportIcon: React.FC<SportIconProps> = ({ 
  sport, 
  size = 24, 
  color = '#000',
  style
}) => {
  const getSportIcon = () => {
    switch (sport) {
      case 'Dance':
        return <DanceIcon width={size} height={size} color={color} />;
      case 'Yoga':
        return <YogaIcon width={size} height={size} color={color} />;
      case 'Archery':
        return <ArcheryIcon width={size} height={size} color={color} />;
      case 'Acrobatics':
        return <AcrobaticsIcon width={size} height={size} color={color} />;
      default:
        return <YogaIcon width={size} height={size} color={color} />;
    }
  };

  return (
    <>
      {getSportIcon()}
    </>
  );
};

export default SportIcon; 