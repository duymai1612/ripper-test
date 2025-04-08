import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

  const iconContainerStyle = {
    ...styles.iconContainer,
    // backgroundColor: colors.iconBackground,
  };

  return (
    <View style={styles.card}>
      <View style={iconContainerStyle}>
        <SportIcon sport={sport} size={28} />
      </View>
      <Text style={styles.sportName}>{sport}</Text>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{startTime} - {endTime}</Text>
      </View>
    </View>
  );
};

export default BookingCard; 