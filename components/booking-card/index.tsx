import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { BookingCardProps } from './types';
import { createStyles } from './styles';
import { useTheme } from '../../services/constants/ThemeContext';
import SportIcon from '../sport-icon';

const BookingCard: FC<BookingCardProps> = ({
  sport,
  startTime,
  endTime,
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <SportIcon sport={sport} size={24} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.sportName}>{sport}</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{startTime}</Text>
          <Text style={styles.dash}>-</Text>
          <Text style={styles.time}>{endTime}</Text>
        </View>
      </View>
    </View>
  );
};

export default BookingCard; 