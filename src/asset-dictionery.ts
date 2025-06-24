import * as path from 'path';

export const getDefaultTrayIconPath = (): string => {
  return path.join(__dirname, '..', 'assets', 'tray-icon-image.png');
};

export const getOptionEnabledIconPath = (): string => {
  return path.join(__dirname, '..', 'assets', 'coffeebeans-green.png');
};

export const getResetDefaultIconPath = (): string => {
  return path.join(__dirname, '..', 'assets', 'owl-sleeping.png');
};

export const getCaffeinateIconPath = (): string => {
  return path.join(__dirname, '..', 'assets', 'coffee-drinking-owl.png');
};
