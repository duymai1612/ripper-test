import { StyleSheet } from 'react-native';
import { BORDER_RADIUS, FONT_SIZES, SPACING } from '../../services/constants';

export const createStyles = (colors: {
  card: string;
  text: string;
  border: string;
}) => StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    marginVertical: SPACING.sm,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    marginRight: SPACING.md,
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: colors.border,
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
    marginBottom: SPACING.xs,
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