const { app, BrowserWindow, Menu } = require("electron");

// Menu.setApplicationMenu(null);

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 480,
    minWidth: 800,
    minHeight: 480,
    webPreferences: {
      nodeIntegration: true,
      devTools: true,
      webSecurity: false,
    },
    fullscreen: false,
    frame: true,
  });

  win.loadURL("http://localhost:8080/");

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
