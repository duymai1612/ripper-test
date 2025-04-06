import { StyleSheet } from 'react-native';
import { BORDER_RADIUS, FONT_SIZES, SPACING } from '../../services/constants';

export const createStyles = (colors: {
  primary: string;
  background: string;
  buttonText: string;
  disabledButton: string;
}) => StyleSheet.create({
  button: {
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  disabled: {
    backgroundColor: colors.disabledButton,
  },
  fullWidth: {
    width: '100%',
  },
  buttonText: {
    fontSize: FONT_SIZES.large,
    fontWeight: '600',
    color: colors.buttonText,
  },
  secondaryText: {
    color: colors.primary,
  }
}); 