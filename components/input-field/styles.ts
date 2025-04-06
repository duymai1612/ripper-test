import { StyleSheet } from 'react-native';
import { BORDER_RADIUS, FONT_SIZES, SPACING } from '../../services/constants';

export const createStyles = (colors: {
  text: string;
  border: string;
  error: string;
  background: string;
}) => StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
    width: '100%',
  },
  label: {
    fontSize: FONT_SIZES.medium,
    fontWeight: '600',
    marginBottom: SPACING.xs,
    color: colors.text,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: BORDER_RADIUS.sm,
    paddingHorizontal: SPACING.md,
    fontSize: FONT_SIZES.medium,
    color: colors.text,
    backgroundColor: colors.background,
  },
  errorText: {
    color: colors.error,
    fontSize: FONT_SIZES.small,
    marginTop: SPACING.xs,
  },
  errorInput: {
    borderColor: colors.error,
  }
}); 