import {ipcMain} from 'electron';
export function ipcMainEvents() {
  // Si solo envías y no esperas respuesta
  ipcMain.on('from-angular', (event, data) => {
    console.log('Datos recibidos desde Angular:', data);
  });

// Si quieres esperar respuesta (Promise)
  ipcMain.handle('from-angular-async', async (event, data) => {
    console.log('Datos recibidos desde Angular:', data);
    return { status: 'ok', received: data };
  });
}
