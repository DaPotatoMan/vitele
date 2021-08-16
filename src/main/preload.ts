import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('ipcRenderer', {
   send(channel: string, data: unknown[]) {
      // whitelist channels
      const validChannels = ['toMain'];
      if (validChannels.includes(channel)) {
         ipcRenderer.send(channel, data);
      }
      ipcRenderer.send(channel, data);
   },

   receive: (channel: string, func: (...args: unknown[]) => void) => {
      const validChannels = ['fromMain'];
      if (validChannels.includes(channel)) {
         // Deliberately strip event as it includes `sender`
         ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
      ipcRenderer.on(channel, (event, ...args) => func(...args));
   }
});
