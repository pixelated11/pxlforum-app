const { app, BrowserWindow } = require('electron');
const path = require('path');

const ALLOWED_HOSTS = [
  'pixelated11.page.gd',
  'pxl.gt.tc',
  'pxlforum.page.gd',
  'imgdb.com',
];

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "Pixel's Forum",
    icon: path.join(__dirname, 'src', 'icon.ico'),
    webPreferences: {
      webviewTag: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  app.quit();
});