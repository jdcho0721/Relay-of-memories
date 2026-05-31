# 추억의 릴레이 — Relay of Memories
### 전북맹아학교를 위한 촉각 음성 졸업 앨범

<p align="center">
  <img src="https://img.shields.io/badge/WCAG-2.1%20AA-4CAF50?style=flat-square" alt="WCAG 2.1 AA">
  <img src="https://img.shields.io/badge/PWA-Offline%20Ready-5A67D8?style=flat-square" alt="PWA">
  <img src="https://img.shields.io/badge/License-MIT-A07840?style=flat-square" alt="MIT License">
  <img src="https://img.shields.io/badge/Humartology-Lab-1A362D?style=flat-square" alt="Humartology Lab">
</p>

<p align="center">
  <b>시각장애 학생들에게 손끝의 기억을 선물하는 포용적 감성 아카이브</b><br>
  <i>An inclusive emotional archive gifting fingertip memories to visually impaired students</i>
</p>

---

## 프로젝트 소개 / Overview

**추억의 릴레이**는 전북맹아학교 졸업생들을 위해 제작된 디지털 촉각 음성 졸업 앨범입니다.  
시각장애 학생들이 손끝의 촉각물을 통해 친구의 얼굴을 느끼고, 본인의 목소리로 녹음된 메시지를 들을 수 있도록 설계되었습니다.

*Relay of Memories* is a digital tactile-voice graduation album created for students of Jeonbuk School for the Blind.  
It enables visually impaired students to feel their friends' faces through tactile objects and hear messages recorded in each student's own voice.

> **"박물관이 사람을 기다리는 것이 아니라, 예술이 먼저 사람을 찾아갑니다."**  
> *"Art comes to people first, rather than waiting for people to come to art."*

---

## 주요 기능 / Features

### 🎮 인터랙션 / Interaction

| 동작 | 기능 |
|------|------|
| 카드 클릭 / `Enter` | 학생 소개 + 단짝 친구 찾기 릴레이 시작 |
| 더블 클릭 / 더블 탭 / 길게 누르기 | 학생 본인의 녹음 목소리 재생 |
| 좌우 스와이프 | 카드 순서 탐색 |
| 방향키 `← → ↑ ↓` | 키보드로 카드 이동 |
| `V` 키 / 마이크 버튼 | 음성 인식 챗봇 활성화 |

### ♿ 접근성 / Accessibility

- **WCAG 2.1 AA** 준수 — 모든 인터랙티브 요소에 `aria-label` 적용
- **TalkBack / VoiceOver** 완벽 지원 — 스크린 리더와 완전 호환
- **음성 인식 챗봇** — `"민수를 찾아줘"`, `"혜란의 꿈이 뭐야?"` 등 자연어 질의 지원
- **음성 오인식 보정** — 유사 발음 자동 교정 필터 내장
- **키보드 내비게이션** — 마우스 없이 전체 기능 이용 가능
- **PWA** — 오프라인 설치 및 사용 지원

### 🎵 사운드 / Sound

- 배경 음악 자동 재생 (볼륨 30%)
- 학생별 개인 녹음 메시지 (`재형m.mp3` 등)
- Web Speech API 기반 한국어 TTS 내레이션
- 음높이(pitch) 개인화로 각 학생의 목소리 특성 반영

---

## 게임 흐름 / Game Flow

```
카드 선택
    ↓
학생 자기소개 (TTS)
    ↓
"나의 단짝 [이름]을 찾아줘!" 미션 시작
    ↓
앨범에서 단짝 카드 클릭
    ↓
추억의 메시지 재생 → 다음 릴레이 시작
```

6명의 학생이 원형으로 연결되어 릴레이 방식으로 서로를 소개합니다.  
`재형 → 은우 → 지우 → 민수 → 혜란 → 소연 → 재형`

---

## 파일 구조 / File Structure

```
Relay-of-memories/
├── index.html              # 메인 앱
├── manifest.json           # PWA 매니페스트
├── service-worker.js       # 오프라인 캐시
├── LICENSE                 # MIT 라이선스
│
├── 재형.png / 은우.png ...  # 졸업생 캐릭터 이미지
└── 재형m.mp3 / 은우m.mp3 ... # 졸업생 녹음 음성
```

> **참고:** 졸업생 이미지 및 음성 파일은 개인정보 보호를 위해 이 저장소에 포함되지 않습니다.  
> *Note: Student images and audio files are not included in this repository to protect personal privacy.*

---

## 실행 방법 / Getting Started

별도 설치 없이 브라우저에서 바로 실행됩니다.

```bash
# 1. 저장소 클론
git clone https://github.com/jdcho0721/Relay-of-memories.git

# 2. 로컬 서버 실행 (PWA 기능을 위해 서버 필요)
cd Relay-of-memories
npx serve .
# 또는
python -m http.server 8000

# 3. 브라우저에서 열기
# http://localhost:8000
```

**라이브 데모 / Live Demo:**  
🔗 [jdcho0721.github.io/Relay-of-memories/](https://jdcho0721.github.io/Relay-of-memories/)

---

## 기술 스택 / Tech Stack

| 분류 | 기술 |
|------|------|
| 프론트엔드 | Vanilla HTML / CSS / JavaScript |
| 폰트 | Gowun Batang, Pretendard (Google Fonts) |
| 음성 | Web Speech API (TTS + STT) |
| 오디오 | Web Audio API, HTML5 `<audio>` |
| PWA | Service Worker, Web App Manifest |
| 접근성 | WAI-ARIA, WCAG 2.1 AA |

---

## 프로젝트 배경 / Background

이 작품은 **Mobile Tactile Museum (이동 촉각 뮤지엄)** 전시의 Work 04로,  
휴마톨로지(Humartology) 철학 — Human + Art + Technology — 을 바탕으로 합니다.

> *기술은 수단이며, 예술은 통로이고, 그 목적지는 오직 인간의 존엄성과 행복입니다.*

차가운 플라스틱 대신 따뜻한 원목 프레임, 3D 정밀 제작된 입체 초상,  
그리고 학생 본인의 목소리 — 세 가지가 만나 진정한 '접근성의 미학'을 실천합니다.

---

## 제작진 / Credits

| 역할 | 이름 | 소속 |
|------|------|------|
| Exhibition Creator & Multisensory Interaction Director | **조준동 (Cho Jundong)** | 성균관대학교 정보통신대학 명예교수 · Humartology Lab 설립자 |
| Virtual Archaeology & Tactile Production Director | **김호용** | (주)위프코 대표 |
| Accessibility Consultant & Barrier-Free Supervisor | **육근해** | 장애인문화복지연구소 대표 |

**연락처 / Contact**  
✉ jdcho@skku.edu  
🌐 [blog.naver.com/humartology](https://blog.naver.com/humartology)

---

## 라이선스 / License

이 소프트웨어는 [MIT License](./LICENSE)에 따라 공개됩니다.  
자유롭게 사용·수정·배포할 수 있으나, **저작권 표기(Copyright)는 반드시 유지**해야 합니다.

This software is released under the [MIT License](./LICENSE).  
Free to use, modify, and distribute — **copyright notice must be retained**.

> 졸업생 음성 파일 및 초상 이미지의 저작권은 각 학생 및 전북맹아학교에 귀속됩니다.  
> *Audio and portrait rights belong to each student and Jeonbuk School for the Blind.*

---

<p align="center">
  © 2026 조준동 · Humartology Lab · All rights reserved.<br>
  <i>Mobile Tactile Museum — 이동 촉각 뮤지엄 · 2026</i>
</p>
