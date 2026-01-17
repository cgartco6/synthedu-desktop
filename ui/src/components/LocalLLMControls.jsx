import React from "react";

export default function LocalLLMControls({ modelSettings, setModelSettings }) {
  return (
    <div className="p-4 bg-gray-800 rounded-lg mb-4">
      <h2 className="text-xl mb-2">Local LLM Settings</h2>
      <label className="block mb-2">Model</label>
      <select
        value={modelSettings.model}
        onChange={e => setModelSettings({ ...modelSettings, model: e.target.value })}
        className="w-full p-2 mb-4 bg-gray-700 rounded"
      >
        <option value="ggml-alpaca">Alpaca GGML</option>
        <option value="ggml-llama2">LLaMA2 GGUF</option>
      </select>
      <label className="block mb-2">Context Tokens</label>
      <input
        type="number"
        value={modelSettings.context}
        onChange={e => setModelSettings({ ...modelSettings, context: e.target.value })}
        className="w-full p-2 mb-4 bg-gray-700 rounded"
      />
      <label className="block mb-2">Temperature</label>
      <input
        type="number"
        step="0.1"
        min="0"
        max="2"
        value={modelSettings.temperature}
        onChange={e => setModelSettings({ ...modelSettings, temperature: e.target.value })}
        className="w-full p-2 mb-4 bg-gray-700 rounded"
      />
    </div>
  );
}
