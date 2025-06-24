import { spawn } from 'child_process';
import {
  CaffienatePIDs,
  setCaffienateEnabled,
  setCaffienateWithDisplayEnabled,
} from './pid';
import { RefreshContextMenu } from '../main';

const CAFFEINATE_COMMAND = 'caffeinate';
const DisplayArgs = ['-d']; // '-i' keeps the system awake with display

export const caffeinateMenuItemOnClick = () => {
  console.log('Caffeinate menu item clicked.');
  killCaffeinateProcesses();
  const child = spawn(CAFFEINATE_COMMAND, {
    detached: true,
    stdio: 'ignore',
  });

  child.unref();
  CaffienatePIDs.push(child.pid);

  setCaffienateEnabled(true);
  console.log(`Caffeinate started with PID: ${child.pid}`);

  RefreshContextMenu();
};

export const caffeinateWithDisplayMenuItemOnClick = () => {
  console.log('Caffeinate with display menu item clicked.');
  killCaffeinateProcesses();
  const child = spawn(CAFFEINATE_COMMAND, DisplayArgs, {
    detached: true,
    stdio: 'ignore',
  });

  child.unref();
  CaffienatePIDs.push(child.pid);

  setCaffienateWithDisplayEnabled(true);
  console.log(`Caffeinate with display started with PID: ${child.pid}`);

  RefreshContextMenu();
};

export const deCaffeinateMenuItemOnClick = () => {
  console.log('DeCaffeinate menu item clicked.');
  killCaffeinateProcesses();
  RefreshContextMenu();
};

export const killCaffeinateProcesses = () => {
  console.log('\nKilling caffeinate processes...');

  setCaffienateEnabled(false);
  setCaffienateWithDisplayEnabled(false);

  CaffienatePIDs.forEach((pid) => {
    try {
      process.kill(pid);
      console.log(`\tKilled caffeinate process with PID: ${pid}`);
    } catch (error) {
      console.error(
        `\tFailed to kill caffeinate process with PID: ${pid}`,
        error
      );
    }
  });

  CaffienatePIDs.length = 0;
};
