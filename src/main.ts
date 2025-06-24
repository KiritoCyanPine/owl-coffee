import { app, Tray, Menu } from 'electron';
import {
  getOptionEnabledIconPath,
  getDefaultTrayIconPath,
  getCaffeinateIconPath,
} from './asset-dictionery';
import { CreateTrayContextMenu } from './context-menu';
import { killCaffeinateProcesses } from './controller/caffienater';
import {
  getCaffienateActive,
  initialiseCaffienateState,
} from './controller/pid';

let tray: Tray | null = null;

app.whenReady().then(() => {
  // Hide dock icon on macOS
  if (app.dock) {
    app.dock.hide();
  }

  initialiseCaffienateState();

  tray = new Tray(getDefaultTrayIconPath());
  tray.setToolTip('Keep your machine awake.');

  const contextMenu = CreateTrayContextMenu();
  tray.setContextMenu(contextMenu);
  console.log('Tray icon created and context menu set.');

  tray.on('click', () => {
    tray?.popUpContextMenu();
  });
});

// Handle application quit event

app.on('before-quit', () => {
  // get all caffeinate processes and kill them
  tray?.destroy();
  killCaffeinateProcesses();
  console.log('Tray destroyed and application is quitting.');
});

export const RefreshContextMenu = () => {
  tray?.setContextMenu(CreateTrayContextMenu());
  tray.setImage(
    getCaffienateActive() ? getCaffeinateIconPath() : getDefaultTrayIconPath()
  );

  console.log('Context menu refreshed and tray icon updated.');
};
