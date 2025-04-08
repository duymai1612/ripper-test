import { StyleSheet } from 'react-native';
import { BORDER_RADIUS, FONT_SIZES, SPACING, fontFamilies } from '../../services/constants';

export const createStyles = (colors: {
  card: string;
  text: string;
  border: string;
  iconBackground: string;
}) => StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.border,
    borderWidth: 0.5,
  },
  iconContainer: {
    marginRight: SPACING.md,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: colors.iconBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sportName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
    fontFamily: fontFamilies.semiBold,
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: fontFamilies.semiBold,
  },
}); 