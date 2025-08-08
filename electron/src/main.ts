import {app, BrowserWindow, ipcRenderer} from 'electron';
import * as path from 'path';
import {ipcMainEvents} from './events-main';

let mainWindow: BrowserWindow | null;
let nameProjectAngular = "angular-electron-mockup";

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "Angular and Electron",
    resizable: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: true
    },
  });

  // Cargar Angular compilado
  mainWindow.loadFile(path.join(__dirname, `../../${nameProjectAngular}/browser/index.html`));

  mainWindow.setMenu(null);

  mainWindow.webContents.openDevTools();

  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('file://')) return;
  });

  // Abre las DevTools (opcional)
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

}

export function main() {
  // Load Events
  ipcMainEvents()

  app.on('ready', createWindow);
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
  app.on('activate', () => {
    if (mainWindow === null) createWindow();
  });
}

