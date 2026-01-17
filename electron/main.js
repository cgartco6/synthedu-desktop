const { app, BrowserWindow } = require("electron");
const path = require("path");
const { spawn } = require("child_process");
const { ipcMain } = require("electron");
const { spawn } = require("child_process");

ipcMain.handle("generate-avatar", async (_, text) => {
  return new Promise((resolve) => {
    const py = spawn("python", ["ai_agents/avatar_pipeline.py", text]);
    py.on("close", () => resolve("assets/avatar_output.mp4"));
  });
});

let pyServer;

function startPythonServer() {
  pyServer = spawn("python", [path.join(__dirname, "../ai_agents/live_demo_server.py")]);
  pyServer.stdout.on("data", data => console.log(`PYTHON: ${data}`));
  pyServer.stderr.on("data", data => console.error(`PYTHON ERROR: ${data}`));
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
    }
  });
  win.loadURL("http://localhost:5173");
}

app.whenReady().then(() => {
  startPythonServer();
  createWindow();
});

app.on("will-quit", () => {
  if (pyServer) pyServer.kill();
});
