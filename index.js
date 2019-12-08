const { app, BrowserWindow, Menu, ipcMain, shell } = require("electron");

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
    icon: __dirname + "/src/assets/img/favicon-32.png",
    fullscreen: false,
    frame: true,
  });

  win.maximize();

  win.loadURL("http://localhost:8080/");

  win.on("closed", () => {
    win = null;
  });
}

console.log(__dirname);

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

ipcMain.on("open-link", (event, arg) => {
  console.log("foo");
  shell.openExternal(arg);
});
