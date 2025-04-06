import { StyleSheet } from 'react-native';
import { BORDER_RADIUS, FONT_SIZES, SPACING } from '../../services/constants';

export const createStyles = (colors: {
  error: string;
  background: string;
  text: string;
  primary: string;
}) => StyleSheet.create({
  container: {
    position: 'absolute',
    top: SPACING.xl,
    right: SPACING.md,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.sm,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1000,
    maxWidth: '80%',
  },
  error: {
    backgroundColor: colors.error,
  },
  success: {
    backgroundColor: '#34C759',
  },
  info: {
    backgroundColor: colors.primary,
  },
  message: {
    color: '#FFF',
    fontSize: FONT_SIZES.medium,
    fontWeight: '500',
  }
}); 