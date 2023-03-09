import {PixelRatio, Platform} from 'react-native';
import {MMKV} from 'react-native-mmkv';
import {windowHeight, windowWidth} from './Dimension';

export const storage = new MMKV();

export const objectKeys = <Obj extends {}>(obj: Obj) =>
  Object.keys(obj) as Array<keyof Obj>;

export const capitalize = (val: string) => {
  return val.charAt(0).toUpperCase() + val.slice(1);
};

export const platformSpecificValue = (ios: number, androidd: number) => {
  if (Platform.OS === 'ios') {
    return ios;
  } else if (Platform.OS === 'android') {
    return androidd;
  } else {
    throw new Error('Platform invalid');
  }
};

export default class LocalStorage {
  static get(key: string) {
    const value = storage.getString(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  static set(key: string, value: unknown) {
    storage.set(key, JSON.stringify(value));
  }

  static remove(key: string) {
    storage.delete(key);
  }

  static clear() {
    storage.clearAll();
  }
}

export const capitalizeFirstLowercaseRest = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

function moderateScale(size: any) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

// const scale = size => (windowWidth / guidelineBaseWidth) * size;
const verticalScale = (size: any) =>
  (windowHeight / guidelineBaseHeight) * size;
// const moderateScale = (size, factor = 0.5) =>
//   size + (scale(size) - size) * factor;
const scale = windowWidth / 320;

const scaleSpace = (size: any) => (windowWidth / guidelineBaseWidth) * size;

export {scaleSpace, verticalScale, moderateScale};
