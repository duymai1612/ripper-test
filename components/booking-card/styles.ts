import { StyleSheet } from 'react-native';
import { BORDER_RADIUS, FONT_SIZES, SPACING } from '../../services/constants';

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
  },
  iconContainer: {
    marginRight: SPACING.md,
    width: 36,
    height: 36,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: colors.iconBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  sportName: {
    fontSize: FONT_SIZES.large,
    fontWeight: '600',
    color: colors.text,
    marginBottom: SPACING.xs / 2,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontSize: FONT_SIZES.medium,
    color: colors.text + '99',
  },
  dash: {
    marginHorizontal: SPACING.xs,
    color: colors.text + '99',
  }
}); 