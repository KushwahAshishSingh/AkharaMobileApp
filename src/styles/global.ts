import {StyleSheet} from 'react-native';
import {dark} from '../theme/theme';

export const useGlobaStyles = () => {
  const theme = () => {
    dark;
  };

  const textVariants = StyleSheet.create({
    fs_12_light_faded: {
      fontSize: 12,
      fontWeight: '400',
      color: theme?.textColor?.light_faded,
    },
    fs_12_base_gray: {
      fontSize: 12,
      fontWeight: '400',
      color: theme?.textColor?.text_gray,
    },
    fs_12_white: {
      fontSize: 12,
      fontWeight: '400',
      color: theme?.textColor?.text_white,
    },
    fs_12_light_gray: {
      fontSize: 12,
      fontWeight: '400',
      color: theme?.textColor?.text_light_gray,
    },

    fs_14_light_faded: {
      fontSize: 14,
      fontWeight: '400',
      color: theme?.textColor?.light_faded,
    },
    fs_14_base_gray: {
      fontSize: 14,
      fontWeight: '500',
      color: theme?.textColor?.text_gray,
    },
    fs_14_white: {
      fontSize: 14,
      fontWeight: '500',
      color: theme?.textColor?.text_white,
    },
    fs_14_light_gray: {
      fontSize: 14,
      fontWeight: '500',
      color: theme?.textColor?.text_light_gray,
    },

    fs_16_light_faded: {
      fontSize: 16,
      fontWeight: '400',
      color: theme?.textColor?.light_faded,
    },
    fs_16_base_gray: {
      fontSize: 16,
      fontWeight: '500',
      color: theme?.textColor?.text_gray,
    },
    fs_16_white: {
      fontSize: 16,
      fontWeight: '600',
      color: theme?.textColor?.text_white,
    },
    fs_16_light_gray: {
      fontSize: 16,
      fontWeight: '600',
      color: theme?.textColor?.text_light_gray,
    },

    fs_18_white: {
      fontSize: 18,
      fontWeight: '600',
      color: theme?.textColor?.text_white,
    },
    fs_18_light_gray: {
      fontSize: 18,
      fontWeight: '600',
      color: theme?.textColor?.text_light_gray,
    },

    fs_20_base: {
      fontSize: 20,
      fontWeight: '600',
      color: theme?.textColor?.text_white,
      // fontWeight:
    },
    fs_22_base: {
      fontSize: 22,
      fontWeight: '600',
      color: theme?.textColor?.text_white,
      // fontWeight:
    },
  });
  return StyleSheet.create({
    tabScreensContainer: {
      //   backgroundColor: theme.colors.secondary_bg,
    },
    baseContainer: {
      //   backgroundColor: theme.colors.primary_bg,
      flex: 1,
      paddingHorizontal: 10,
    },
    flex1: {
      flex: 1,
    },
    allCenter: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    textCenter: {
      textAlign: 'center',
    },
    ...textVariants,
  });
};
