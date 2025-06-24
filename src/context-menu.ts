import { app, Menu } from 'electron';
import {
  caffeinateMenuItemOnClick,
  caffeinateWithDisplayMenuItemOnClick,
  deCaffeinateMenuItemOnClick,
  killCaffeinateProcesses,
} from './controller/caffienater';
import {
  getCaffienateEnabled,
  getCaffienateWithDisplayEnabled,
} from './controller/pid';
import {
  getOptionEnabledIconPath,
  getResetDefaultIconPath,
} from './asset-dictionery';

export const CreateTrayContextMenu = (): Menu => {
  console.log('Creating tray context menu...');

  return Menu.buildFromTemplate([
    {
      label: 'caffeinate',
      sublabel: 'Keep your machine awake.',
      click: caffeinateMenuItemOnClick,
      enabled: !getCaffienateEnabled(),
      icon: getCaffienateEnabled() ? getOptionEnabledIconPath() : undefined,
    },
    {
      label: 'caffeinate with display',
      sublabel: 'Keep your machine and screen awake.',
      click: caffeinateWithDisplayMenuItemOnClick,
      enabled: !getCaffienateWithDisplayEnabled(),
      icon: getCaffienateWithDisplayEnabled()
        ? getOptionEnabledIconPath()
        : undefined,
    },
    { type: 'separator' },
    {
      label: 'deCaffeinate',
      sublabel: 'Stop keeping machine awake.',
      click: deCaffeinateMenuItemOnClick,
      enabled: true,
      icon: getResetDefaultIconPath(),
    },
    { type: 'separator' },
    { label: 'Quit', click: () => app.quit() },
  ]);
};
