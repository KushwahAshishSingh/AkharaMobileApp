const textColors = {
  text_gray: '#c9c9c9',
  text_light_gray: '#E1E1E1',
  light_faded: '#EFEFEF',
  text_white: '#FFFFFF',
};

export const dark = {
  colors: {
    primary_bg: '#FA693D',
    secondary_bg: '#4B7DDF',
    black_bg: '#FFFFFF',
    button_fill: '#212426',
    // common
    primary_border: '#e5e8eb',
    secondary_border: '#e4e8eb',
    textbox_border_primary: '#9A9A9A',
    textbox_border_secondary: '#545454',
    score_border: '#96EE88',
    green_primary: '#00A611',
    green_secondary: '#024B09',
    blue_bg: '#4B7DDF',
    success: '#34c77b',
    danger: '#eb5757',
    //text
    placeholder_text: '#C9C9C9',
    //
    white: 'white',
  },
  textColor: {...textColors},
};

export type ThemeObj = typeof dark;
 