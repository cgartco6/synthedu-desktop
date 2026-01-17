from voice_tutor import VoiceTutor
from avatar_renderer import render_avatar
import pyttsx3

def generate_avatar_video(text):
    engine = pyttsx3.init()
    audio_path = "assets/avatar_audio.wav"
    engine.save_to_file(text, audio_path)
    engine.runAndWait()

    return render_avatar(text, audio_path)
