import subprocess
import os

LLAMA_MODEL_PATH = "ai_agents/models/ggml-alpaca-7b-q4.bin"

def run_local_llm(prompt):
    if not os.path.exists(LLAMA_MODEL_PATH):
        return f"[LLM placeholder] {prompt}"
    
    cmd = [
        "llama.cpp/llama.exe",
        "-m", LLAMA_MODEL_PATH,
        "-p", prompt,
        "-n", "256"
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    return result.stdout
