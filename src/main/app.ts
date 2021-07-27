import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import reloader from 'electron-reloader';

const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
   try {
      reloader(module, {
         ignore: ['src/render']
      });
   } catch (e) {
      //
   }
}

class App {
   window = null as Electron.BrowserWindow | null;

   constructor() {
      app.whenReady().then(() => this.createWindow());
      app.on('window-all-closed', () => this.close());
      app.on('activate', () => this.activate());
   }

   createWindow() {
      this.window = new BrowserWindow({
         width: 700,
         height: 600,
         webPreferences: {
            nodeIntegration: true,
            preload: join(__dirname, 'preload.js')
         }
      });

      if (isDevelopment) {
         this.window.loadURL('http://localhost:3000');
         this.window.webContents.openDevTools();
      } else {
         this.window.loadFile('dist/render/index.html');
      }
   }

   close() {
      if (process.platform !== 'darwin') {
         app.quit();
         this.window = null;
      }
   }

   activate() {
      const windows = BrowserWindow.getAllWindows();

      if (windows.length === 0) {
         this.createWindow();
      }
   }
}

const instance = new App();
