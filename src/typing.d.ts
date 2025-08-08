import {_PreloadElectronApi} from './type';

export {};



declare global {
  interface Window {
    serverElectron: _PreloadElectronApi;
  }
}
