import pyttsx3
import queue
import threading

class VoiceTutor:
    def __init__(self):
        self.engine = pyttsx3.init()
        self.engine.setProperty("rate", 165)
        self.engine.setProperty("volume", 1.0)
        self.queue = queue.Queue()

        t = threading.Thread(target=self._run, daemon=True)
        t.start()

    def _run(self):
        while True:
            text = self.queue.get()
            self.engine.say(text)
            self.engine.runAndWait()

    def speak(self, text):
        self.queue.put(text)
