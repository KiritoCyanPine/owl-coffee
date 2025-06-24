export let CaffienatePIDs: number[] = [];

let caffienateActive: CaffienateState;

type CaffienateState = {
  caffienateWithDisplayEnabled: boolean;
  caffienateEnabled: boolean;
};

export const initialiseCaffienateState = () => {
  caffienateActive = {
    caffienateWithDisplayEnabled: false,
    caffienateEnabled: false,
  };
};

export const getCaffienateEnabled = (): boolean => {
  return caffienateActive.caffienateEnabled;
};

export const getCaffienateWithDisplayEnabled = (): boolean => {
  return caffienateActive.caffienateWithDisplayEnabled;
};

export const setCaffienateEnabled = (enabled: boolean) => {
  caffienateActive.caffienateEnabled = enabled;
};

export const setCaffienateWithDisplayEnabled = (enabled: boolean) => {
  caffienateActive.caffienateWithDisplayEnabled = enabled;
};

export const getCaffienateActive = (): boolean => {
  return (
    caffienateActive.caffienateEnabled ||
    caffienateActive.caffienateWithDisplayEnabled
  );
};
