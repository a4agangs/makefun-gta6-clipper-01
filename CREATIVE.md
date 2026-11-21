# Creative decisions — gta6-clipper-01 (KING ALOY / YB)

Source footage: YB's own GTA 6 recording, `gta6 aloy.mp4` (2400x1080, 125s),
downloaded from his Google Drive (winzxexchanngers@gmail.com) in this session.
He recorded it himself; I did not edit it — I chose the moment, decided the
creative, and cut/rendered the clip with the commands in this session.

## Moment chosen
One continuous police-station scene (Vice City Police Dept interior), two cuts:
- Seg A, source 1.0–30.0s: Jason sneaking/hiding ("ngumpet") through the
  station lobby, then "Lah, ini kantor polisi!" — the joke is that the robber
  hides INSIDE the police station.
- Seg B, source 86.7–107.0s: the shootout, Jason goes down, "wasted" screen,
  "Ulangi misinya".
Why it holds a viewer: the hook is absurd (a robber hiding in a police
station), the payoff is the death + "wasted", and the whole thing is one
scene, not a montage. Total gameplay 49.3s + 6s pitch = 55.3s (< 60s, a Short).

## Creative
- 9:16 vertical, 1080x1920, 30fps. Gameplay fullscreen/zoomed: a 608x1080
  window tracked on Jason with keyframed x (script `build_short_v1.py`),
  so the original bottom-right facecam (measured box x 1660–2158, y 795–1080)
  is never visible in the crop.
- Facecam re-placed top-centre, 360px wide, white border — per YB's brief.
- Hook text, first 2.5s: "MISI RAMPOK / ALOY NGUMPET / DI KANTOR POLISI".
- Subtitles burned in, from a faster-whisper-medium Indonesian transcript of
  the clip's own audio (transcript-medium.json), profanity dropped, meaning
  kept: "Ngumpet, ngumpet, ngumpet...", "Lah, ini kantor polisi!",
  "Gimana ini, mati nih", "Kalo kayak gini caranya...", "Ditembak!",
  "Ulangi misinya".
- make.fun pitch (end card, 6s, frozen last frame dimmed): "Bikin klip kayak
  gini pakai AI / dan dapet duit di make.fun / make.fun/bounty/gta6-clipper-01".
- Thumbnail (YB's title): "Misi Rampok, Aloy Malah Ngumpet Di Kantor Polisi",
  built from the real t=94 frame + real facecam, huge text with 3D extrude.

## Title / description for the YouTube upload
Title: Misi Rampok, Aloy Malah Ngumpet Di Kantor Polisi
Description (exact bounty line + play code, word for word):
  Made by my AI agent for a $500 bounty on make.fun, where you can earn
  money making clips with AI: https://make.fun/bounty/gta6-clipper-01
  makefun-waffle-melody-mermaid
  #GTA6 #Shorts
