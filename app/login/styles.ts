import { StyleSheet } from 'react-native';
import { FONT_SIZES, SPACING, fontFamilies } from '../../services/constants';

export const createStyles = (colors: {
  background: string;
  text: string;
}) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: SPACING.lg,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: SPACING.md,
  },
  title: {
    fontSize: FONT_SIZES.xxlarge,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: SPACING.lg,
    fontFamily: fontFamilies.semiBold,
  },
  form: {
    width: '100%',
  },
  buttonContainer: {
    marginTop: SPACING.lg,
  },
}); 