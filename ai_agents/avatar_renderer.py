from moviepy.editor import ImageClip, AudioFileClip, CompositeVideoClip
import os

def render_avatar(text, audio_file, avatar_img="assets/avatar.png"):
    audio = AudioFileClip(audio_file)
    avatar = ImageClip(avatar_img).set_duration(audio.duration)

    avatar = avatar.resize(height=720).set_position("center")
    video = CompositeVideoClip([avatar]).set_audio(audio)

    output = "assets/avatar_output.mp4"
    video.write_videofile(output, fps=24)
    return output
