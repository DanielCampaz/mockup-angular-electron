import { contextBridge, ipcRenderer } from 'electron';
import {PreloadElectronApi} from '../types';

const preloadElectronApi: PreloadElectronApi = {
  sendData: (channel: string, data: any) => {
    ipcRenderer.send(channel, data);
  },
  sendDataAndWait: (channel: string, data: any) => {
    return ipcRenderer.invoke(channel, data);
  }
}

contextBridge.exposeInMainWorld('serverElectron', preloadElectronApi);
