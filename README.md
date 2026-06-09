# rest04 — AICADEMY · 온라인 AI 동영상 교육 플랫폼

AI·AI 리터러시 강의를 **유튜브 동영상**으로 제공하는 교육회사 사이트입니다.
[rest03](https://github.com/aebonlee/rest03) 의 React + Vite + Tailwind 구조를 베이스로, 동영상 교육 플랫폼으로 재설계했습니다.

## ✨ 주요 기능

- 🎨 **5색 브랜드 팔레트** — 다크블루(navy)·로열블루(royal) 주컬러 + 하늘색(보조)·앰버/민트(포인트)
- 🌗 **다크 & 라이트 모드** — 라이트 기본값 + 토글 + localStorage 저장 (FOUC 방지)
- 📱 **모바일 최적화** — 반응형 레이아웃, 햄버거 메뉴, 가로 스크롤 탭
- 🎬 **유튜브 동영상** — 미등록(링크공개) 영상 임베드, 모달 플레이어
- 🔢 **2 × 3 그리드 + 페이지네이션** — 한 페이지 6개씩
- 🗂 **rest03 패턴 이식** — 대탭(주제) + 소분류(모듈) 버튼 + 그리드 + 페이지네이션

## 🎓 커리큘럼 (영상 강의)

| 주제 (메뉴) | 모듈 | 강의 수 |
| --- | --- | --- |
| **AI 콘텐츠 제작** `/videos/creation` | 콘텐츠 제작·이미지·영상·프레젠테이션·발표·피그마·바이브코딩 | 17 |
| **AI 리터러시** `/videos/literacy` | 창의·문제해결·디자인씽킹·컴퓨팅사고·마크다운·노션·리포트·인용 | 13 |

## 🧱 기술 스택

- **React 18** + **Vite 5**
- **React Router 6** (HashRouter — GitHub Pages 정적 호스팅 호환)
- **Tailwind CSS 3** (`darkMode: 'class'`)
- 폰트: Pretendard (CDN)

## 🎨 컬러 팔레트

| 토큰 | 역할 | 대표 색 |
| --- | --- | --- |
| `navy` | 주컬러 (다크블루) — 배경·타이포 | `#0B1A33` |
| `royal` | 주컬러 (로열블루) — CTA·링크·강조 | `#2B5BFF` |
| `sky` | 보조컬러 (하늘색) | `#38BDF8` |
| `amber` | 포인트컬러 (골드앰버) | `#FFB020` |
| `mint` | 포인트컬러2 (민트) | `#34D399` |

> 색상 정의: `tailwind.config.js`, 다크/라이트 표면 스타일: `src/index.css`

## 📁 구조

```
src/
├── main.jsx                  # 진입점 (HashRouter + ThemeProvider)
├── App.jsx                   # 라우팅
├── index.css                 # Tailwind + 공통 컴포넌트 클래스 + 다크모드
├── theme/
│   └── ThemeContext.jsx      # 다크/라이트 전역 상태 (localStorage)
├── data/
│   └── site.js               # ★ 회사정보·주제·동영상 데이터 (여기만 수정)
├── components/
│   ├── Header.jsx            # GNB (드롭다운/모바일 패널) + 테마토글
│   ├── Footer.jsx            # 푸터
│   ├── ThemeToggle.jsx       # 🌙/☀️ 전환 버튼
│   ├── VideoCard.jsx         # 영상 썸네일 카드
│   ├── VideoModal.jsx        # 유튜브 임베드 모달 플레이어
│   ├── Pagination.jsx        # 처음/이전/번호/다음/마지막
│   ├── ScrollToTop.jsx       # 라우트 변경 시 스크롤 초기화
│   └── ScrollToTopButton.jsx # 우측하단 맨위로 버튼
└── pages/
    ├── Home.jsx              # 메인 (히어로·특징·주제·추천영상·CTA)
    ├── Videos.jsx            # ★ 영상 강의 (주제탭 + 2×3 그리드 + 페이지네이션)
    ├── About.jsx             # 회사소개
    ├── Contact.jsx           # 문의 (폼)
    └── SimplePage.jsx        # 약관/개인정보 등 단순 페이지
```

## 🎥 유튜브 영상 추가 방법

1. 유튜브에 영상 업로드 → 공개범위를 **"미등록(링크 공개)"** 으로 설정
   > ⚠️ "비공개"는 임베드 재생이 불가합니다. 웹 노출용은 **미등록** 권장.
2. 영상 URL 의 11자리 ID 를 확인 (`https://youtu.be/AbCdEf12345` → `AbCdEf12345`)
3. `src/data/site.js` 의 `videos` 객체에서 해당 강의의 `youtubeId` 에 입력
   - 썸네일은 ID 로 자동 생성됩니다. (비워두면 그라데이션 플레이스홀더 표시)

새 주제를 추가하려면 `topics` 배열과 `videos` 객체에 같은 `key` 로 항목을 추가하면 네비·탭·라우트가 자동 반영됩니다.

## 🚀 개발 / 배포

```bash
npm install
npm run dev      # http://localhost:5173/rest04/
npm run build    # dist/
npm run preview
```

`main` 브랜치 push 시 GitHub Actions(`.github/workflows/deploy.yml`)가 자동 빌드·배포합니다.
배포 URL: `https://aebonlee.github.io/rest04/`

> 다른 경로/도메인 배포 시 `vite.config.js` 의 `base` 를 수정하세요.
