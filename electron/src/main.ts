import {app, BrowserWindow, ipcRenderer} from 'electron';
import * as path from 'path';
import {ipcMainEvents} from './events-main';

let mainWindow: BrowserWindow | null;
let nameProjectAngular = "angular-electron-mockup";

//Fixme: Cambiar estas Variables tambien en Package.Json y en Forge.Config.Ts
const NAME_MAINTAINER = "Your Name";
const NAME_PROJECT = 'my_electron_angular';
const COMPACT_NAME_PROJECT = 'myelectronangular';
const COMPANY_NAME = 'Nombre De Tu Empresa o Organizacion';
const COMPACT_COMPANY_NAME = 'nombredetuempresaoorganizacion';
const COPYRIGHT_YEAR = 2025;
const DESCRIPTION_PROJECT = 'Mock Up of Electron whit Angular 20 and Protocol of Compile Whit MacOs, Win, and Linux';
const PRODUCT_NAME_PROJECT = 'My Electron Angular';
const NAME_PREFIX = 'Setup';
const NAME_SETUP_EXE = `${NAME_PROJECT}-${NAME_PREFIX}`;

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

  //mainWindow.setMenu(null);
  mainWindow.setTitle(PRODUCT_NAME_PROJECT)

  //mainWindow.setIcon(path.join(__dirname, `../assets/icon.ico`));

  //mainWindow.webContents.openDevTools();

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

