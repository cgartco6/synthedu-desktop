import subprocess
import uuid
from pathlib import Path

WAV2LIP_PATH = "third_party/Wav2Lip"
AVATAR_VIDEO = "assets/avatars/instructor.mp4"

def render_avatar(audio_path):
    out = Path("generated/avatar_" + str(uuid.uuid4()) + ".mp4")
    cmd = [
        "python", f"{WAV2LIP_PATH}/inference.py",
        "--checkpoint_path", f"{WAV2LIP_PATH}/checkpoints/wav2lip.pth",
        "--face", AVATAR_VIDEO,
        "--audio", audio_path,
        "--outfile", str(out)
    ]
    subprocess.run(cmd, check=True)
    return str(out)
