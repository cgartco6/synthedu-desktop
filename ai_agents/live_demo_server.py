import asyncio
import websockets
import json
import random
from datetime import datetime
from local_llm import run_local_llm

AGENTS = ["CourseFactory", "Tutor", "VideoStudio", "Exam", "Certification"]

def generate_metrics():
    return {agent: random.randint(1, 10) for agent in AGENTS}

def generate_llm_activity():
    prompts = [
        "Generate syllabus for 'Advanced AI Trading'",
        "Adjust difficulty for finance module",
        "Render video lesson on neural networks",
        "Create multiple-choice exam for military fitness",
        "Issue certificate for leadership program"
    ]
    prompt = random.choice(prompts)
    try:
        response = run_local_llm(prompt)
    except:
        response = f"[LLM simulation] {prompt}"
    return response[:200]

async def handler(websocket, path):
    while True:
        metrics = generate_metrics()
        log = generate_llm_activity()
        payload = {"timestamp": datetime.utcnow().isoformat(), "metrics": metrics, "log": log}
        await websocket.send(json.dumps(payload))
        await asyncio.sleep(2)

async def main():
    print("Live Demo WebSocket server started on ws://localhost:8765")
    async with websockets.serve(handler, "localhost", 8765):
        await asyncio.Future()

if __name__ == "__main__":
    asyncio.run(main())
