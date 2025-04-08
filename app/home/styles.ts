import { StyleSheet } from 'react-native';
import { BORDER_RADIUS, SPACING, fontFamilies } from '../../services/constants';

export const createStyles = (colors: {
  background: string;
  text: string;
  dateHeader: string;
}) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.text + '10',
  },
  backButton: {
    paddingRight: SPACING.sm,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    fontFamily: fontFamilies.semiBold,
  },
  listContainer: {
    paddingBottom: SPACING.md,
  },
  dateHeader: {
    backgroundColor: colors.dateHeader,
    paddingVertical: SPACING.sm,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    textAlign: 'center',
    fontFamily: fontFamilies.semiBold,
  },
  sectionContent: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    marginBottom: SPACING.xs,
  },
  loadingContainer: {
    padding: SPACING.lg,
    alignItems: 'center',
  },
  loadingText: {
    color: colors.text,
    fontSize: 14,
    fontFamily: fontFamilies.regular,
  },
}); 