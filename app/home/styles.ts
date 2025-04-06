import { StyleSheet } from 'react-native';
import { FONT_SIZES, SPACING } from '../../services/constants';

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
    padding: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.text + '20',
  },
  title: {
    fontSize: FONT_SIZES.xlarge,
    fontWeight: 'bold',
    color: colors.text,
    marginLeft: SPACING.md,
  },
  listContainer: {
    flex: 1,
  },
  dateHeader: {
    backgroundColor: colors.dateHeader,
    padding: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  dateText: {
    fontSize: FONT_SIZES.medium,
    fontWeight: '600',
    color: colors.text,
  },
  sectionContent: {
    padding: SPACING.md,
  },
  loadingContainer: {
    padding: SPACING.lg,
    alignItems: 'center',
  },
  loadingText: {
    color: colors.text,
    fontSize: FONT_SIZES.medium,
  },
}); 