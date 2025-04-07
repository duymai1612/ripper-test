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
    fontSize: FONT_SIZES.xlarge,
    fontWeight: 'bold',
    color: colors.text,
  },
  listContainer: {
    paddingBottom: SPACING.md,
  },
  dateHeader: {
    backgroundColor: colors.dateHeader,
    paddingVertical: SPACING.sm,
  },
  dateText: {
    fontSize: FONT_SIZES.medium,
    fontWeight: '500',
    color: colors.text,
    textAlign: 'center',
  },
  sectionContent: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs / 2,
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