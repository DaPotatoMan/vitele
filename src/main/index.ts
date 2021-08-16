import { join } from 'path';
import { app, BrowserWindow } from 'electron';

if (require('electron-squirrel-startup')) app.quit();

const isDevelopment = process.env.NODE_ENV === 'development';

class App {
   window = null as Electron.BrowserWindow | null;

   init() {
      app.on('ready', () => this.createWindow());
      app.on('activate', () => this.activate());
      app.on('window-all-closed', () => this.quit());
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
         this.window.webContents.openDevTools({
            mode: 'detach'
         });
      } else {
         this.window.loadFile('./dist/index.html');
      }
   }

   quit() {
      if (process.platform !== 'darwin') {
         app.quit();
         this.window = null;
      }
   }

   private activate() {
      const windows = BrowserWindow.getAllWindows();

      if (windows.length === 0) {
         this.createWindow();
      }
   }
}

// Init App
const instance = new App();
instance.init();
