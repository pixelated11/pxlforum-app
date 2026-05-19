const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('appConfig', {
  allowedHosts: [
    'pixelated11.page.gd',
    'pxl.gt.tc',
    'pxlforum.page.gd',
    'imgdb.com',
  ],
  defaultUrl: 'https://pixelated11.page.gd',
});