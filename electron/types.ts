export interface PreloadElectronApi {
  sendData: (channel: string, data: any) => void;
  sendDataAndWait: (channel: string, data: any) => Promise<any>;
}
