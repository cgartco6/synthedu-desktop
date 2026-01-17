const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  sendLLMRequest: (prompt) => ipcRenderer.invoke("llm-request", prompt)
});
