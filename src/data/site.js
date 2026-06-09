// ============================================================
// 사이트 전역 데이터 — 회사 정보 / 영상 주제(메뉴) / 모듈 / 동영상
// 콘텐츠를 바꾸려면 대부분 이 파일만 수정하면 됩니다.
//
// ▶ 유튜브 영상 추가/교체
//   - youtubeId : 유튜브 URL(https://youtu.be/XXXX)의 XXXX 부분 (11자리)
//   - module    : 소분류(아래 topics[].modules 중 하나와 일치해야 필터됨)
//   - 영상 공개범위는 "미등록(링크 공개)" 권장 (비공개는 임베드 재생 불가)
// ============================================================

export const company = {
  // 교육 브랜드 (사이트명)
  name: 'AICADEMY',
  nameKo: '에이아이카데미',
  fullName: 'AICADEMY ONLINE LEARNING',
  tagline: '온라인으로 배우는 AI & AI 리터러시',
  intro: [
    '에이아이카데미는 IT 정보통신 전문 기업 드림아이티비즈(DreamIT Biz)가 운영하는 온라인 AI 교육 플랫폼입니다.',
    '누구나 쉽게 인공지능을 이해하고 활용할 수 있도록, 현업 전문가의 강의를 동영상으로 제공합니다. AI 콘텐츠 제작 실무부터 AI 리터러시와 학습 역량까지 — 체계적인 커리큘럼으로 함께합니다.',
  ],

  // 연락처 (드림아이티비즈)
  email: 'aebon@dreamitbiz.com',
  tel: '010-3700-0629',
  kakao: 'aebon',
  hours: '평일 09:00 ~ 18:00',

  // 운영사(법인) 정보 — 푸터 사업자 표기
  operator: {
    nameKo: '드림아이티비즈',
    nameEn: 'DreamIT Biz',
    ceo: '이애본(Ph.D)',
    ceoTitle: '한신대학교 AI·SW대학 겸임교수',
    bizNo: '601-45-20154',
    mailOrderNo: '제2024-수원팔달-0584호',
    publisherNo: '제2026-000026호',
    site: 'https://www.dreamitbiz.com',
  },

  copyright: '© 2025 드림아이티비즈(DreamIT Biz). All rights reserved.',

  social: [
    { label: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },
    { label: 'YouTube', url: 'https://youtube.com' },
  ],

  // 패밀리 사이트 (dreamitbiz.com 기준)
  familySites: [
    { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },
    { name: 'DreamIT 올댓', url: 'https://allthat.dreamitbiz.com' },
    { name: 'DreamIT Biz 출판사', url: 'https://books.dreamitbiz.com' },
    { name: 'AHP 연구 플랫폼', url: 'https://ahp-basic.dreamitbiz.com' },
    { name: '핵심역량 자가측정', url: 'https://competency.dreamitbiz.com' },
  ],

  footerLinks: [
    { label: '이용약관', to: '/terms' },
    { label: '개인정보처리방침', to: '/privacy', strong: true },
  ],
}

// 핵심 강점 (홈 Features 섹션)
export const features = [
  {
    icon: '🎬',
    title: '실무형 동영상 강의',
    desc: '현업 전문가가 직접 제작한 강의로, 따라하며 바로 적용할 수 있습니다.',
  },
  {
    icon: '🧭',
    title: '주제·모듈 커리큘럼',
    desc: '콘텐츠 제작 실무와 AI 리터러시를 모듈 단위로 체계적으로 구성했습니다.',
  },
  {
    icon: '📱',
    title: '모바일 최적화',
    desc: 'PC·태블릿·스마트폰 어디서든 끊김 없이 시청 가능한 반응형 플레이어.',
  },
  {
    icon: '🌗',
    title: '라이트 & 다크 모드',
    desc: '밝은 기본 테마와 눈이 편안한 다크 테마를 자유롭게 전환하세요.',
  },
]

// ============================================================
// 영상 주제(메뉴) — 대탭 + 소분류(모듈)
//  modules 의 각 문자열은 videos[].module 과 일치해야 필터됩니다.
// ============================================================
export const topics = [
  {
    key: 'creation',
    label: 'AI 콘텐츠 제작',
    title: '생성형 AI 콘텐츠 제작 실무',
    headline: 'AI로 만드는 콘텐츠 — 기획부터 코딩까지',
    desc: '글·이미지·영상·프레젠테이션 제작은 물론, 피그마와 바이브코딩까지. 생성형 AI를 실무에 바로 적용하는 제작 노하우를 익힙니다.',
    accent: 'royal',
    modules: ['콘텐츠 제작', '이미지 만들기', '영상 제작', '프레젠테이션', '효과적 발표', '피그마', '바이브코딩'],
  },
  {
    key: 'literacy',
    label: 'AI 리터러시',
    title: 'AI 리터러시 & 학습 역량',
    headline: 'AI 시대의 사고력과 생산성 도구',
    desc: '창의적 문제해결과 디자인씽킹·컴퓨팅 사고력부터, 마크다운·노션·리포트 작성·인용 관리까지 — AI 시대의 학습 역량을 기릅니다.',
    accent: 'sky',
    modules: ['창의·문제해결', '디자인씽킹', '컴퓨팅 사고', '마크다운', '노션', '리포트 작성', '인용·출처'],
  },
  {
    key: 'web',
    label: '웹 개발 기초',
    title: 'HTML 기초 수업',
    headline: '웹 개발, HTML부터 jQuery까지',
    desc: 'HTML·CSS3 기초부터 자바스크립트·jQuery까지, 웹 페이지 제작의 핵심을 단계별로 익히는 기초 수업입니다.',
    accent: 'mint',
    modules: ['HTML/CSS', 'JavaScript', 'jQuery'],
  },
  {
    key: 'python',
    label: '파이썬 프로그래밍',
    title: '파이썬 프로그래밍 (소프트웨어 기초)',
    headline: '코딩 첫걸음, 파이썬으로 시작하기',
    desc: '파이썬 설치와 환경설정부터 변수·계산·자료형·반복문·함수까지, 비전공자도 따라할 수 있는 소프트웨어 기초 강의입니다.',
    accent: 'amber',
    modules: ['소개·설치', '변수·터틀', '변수·입출력', '계산처리', '자료형', '반복문·함수'],
  },
]

// ============================================================
// 동영상 데이터 (topic 키별 배열)
// ============================================================
export const videos = {
  creation: [
    { id: 'c1', youtubeId: 'Wxfb4DaqqYw', module: '콘텐츠 제작', title: 'AI 콘텐츠 제작 ①', desc: '생성형 AI로 콘텐츠를 기획하고 초안을 완성하는 기본기.' },
    { id: 'c2', youtubeId: 'A8b_9wGLdt4', module: '콘텐츠 제작', title: 'AI 콘텐츠 제작 ②', desc: '실전 사례로 배우는 콘텐츠 제작 워크플로우.' },
    { id: 'c3', youtubeId: 'ME6FYY_Lj9o', module: '이미지 만들기', title: '수려한 이미지 만들기 ①', desc: '이미지 생성 AI로 고품질 비주얼을 만드는 법.' },
    { id: 'c4', youtubeId: 'BKLSj1zGOjY', module: '이미지 만들기', title: '수려한 이미지 만들기 ②', desc: '프롬프트와 보정으로 완성도를 높이는 심화편.' },
    { id: 'c5', youtubeId: '6JQ7F-19598', module: '영상 제작', title: 'AI 영상 제작 ①', desc: 'AI 도구로 영상 콘텐츠를 빠르게 제작하기.' },
    { id: 'c6', youtubeId: '7qJ4g_6ZrpA', module: '영상 제작', title: 'AI 영상 제작 ②', desc: '편집·자막·효과까지 AI로 효율화하기.' },
    { id: 'c7', youtubeId: 'pGMPdPW9kMM', module: '영상 제작', title: 'AI 영상 제작 ③', desc: '완성도 높은 영상으로 마무리하는 실전편.' },
    { id: 'c8', youtubeId: 'CMhU0GerdIA', module: '프레젠테이션', title: 'AI 프레젠테이션 제작 ①', desc: 'AI로 설득력 있는 발표 자료를 설계하기.' },
    { id: 'c9', youtubeId: 'A7Z2H4BJMIQ', module: '프레젠테이션', title: 'AI 프레젠테이션 제작 ②', desc: '디자인과 구성을 AI로 빠르게 완성하기.' },
    { id: 'c10', youtubeId: 'uL_IiYDtcbs', module: '프레젠테이션', title: 'AI 프레젠테이션 제작 ③', desc: '실전 템플릿으로 발표 자료 완성하기.' },
    { id: 'c11', youtubeId: 't8qhHm42ie4', module: '효과적 발표', title: '효과적인 프레젠테이션', desc: '청중을 사로잡는 발표 전달 전략.' },
    { id: 'c12', youtubeId: 'Wi0EWqLpSwg', module: '피그마', title: '피그마 활용 ①', desc: 'AI 시대의 디자인 협업 도구 피그마 입문.' },
    { id: 'c13', youtubeId: 'tSOs9b-M6TM', module: '피그마', title: '피그마 활용 ②', desc: '실전 화면 설계와 프로토타이핑.' },
    { id: 'c14', youtubeId: 'LnqUCQGDzaQ', module: '바이브코딩', title: '바이브코딩 ①', desc: 'AI와 함께 코드를 작성하는 바이브코딩 입문.' },
    { id: 'c15', youtubeId: 'dbOIYu3YQcI', module: '바이브코딩', title: '바이브코딩 ②', desc: '실전 프로젝트로 익히는 AI 페어 코딩.' },
    { id: 'c16', youtubeId: 'Xabe8aFvOqA', module: '바이브코딩', title: '바이브코딩 ③', desc: '기능 구현과 디버깅을 AI로 가속하기.' },
    { id: 'c17', youtubeId: 'vzcvfwk6lI8', module: '바이브코딩', title: '바이브코딩 ④', desc: '배포까지 이어지는 바이브코딩 완성편.' },
  ],
  literacy: [
    { id: 'l1', youtubeId: 'JJjFNBV66As', module: '창의·문제해결', title: '창의력·복합문제해결에서의 AI ①', desc: '복잡한 문제를 AI와 함께 창의적으로 해결하기.' },
    { id: 'l2', youtubeId: 'cd-OKHeomEs', module: '창의·문제해결', title: '창의력·복합문제해결에서의 AI ②', desc: '문제 정의와 발상 단계에서의 AI 활용.' },
    { id: 'l3', youtubeId: 'Lk1VTV2hNag', module: '창의·문제해결', title: '창의력·복합문제해결에서의 AI ③', desc: '실전 케이스로 보는 창의적 문제해결.' },
    { id: 'l4', youtubeId: 'rcOz0mtCrs4', module: '디자인씽킹', title: '디자인씽킹과 생성형 AI', desc: '사용자 중심 사고에 생성형 AI를 결합하기.' },
    { id: 'l5', youtubeId: 'nXj0Gu5eVXY', module: '컴퓨팅 사고', title: '컴퓨터 사고력', desc: '문제를 분해하고 절차화하는 컴퓨팅 사고력.' },
    { id: 'l6', youtubeId: 'JZ-C64wfYz0', module: '마크다운', title: 'Markdown 활용 ①', desc: '문서 작성의 기본, 마크다운 문법 익히기.' },
    { id: 'l7', youtubeId: 'pP3vjiUyhf0', module: '마크다운', title: 'Markdown 활용 ②', desc: '실전 문서·노트에 마크다운 적용하기.' },
    { id: 'l8', youtubeId: '6bKsR2Abx7w', module: '노션', title: 'Notion 마스터클래스 ①', desc: '노션으로 지식과 업무를 체계화하기.' },
    { id: 'l9', youtubeId: 'mOOJRixC3WU', module: '노션', title: 'Notion 마스터클래스 ②', desc: '데이터베이스·템플릿 활용 심화편.' },
    { id: 'l10', youtubeId: '4W4QNCIooXU', module: '리포트 작성', title: 'AI 리포트 작성법 ①', desc: 'AI를 활용한 리포트 기획과 구조 설계.' },
    { id: 'l11', youtubeId: 'NbVacutsdlM', module: '리포트 작성', title: 'AI 리포트 작성법 ②', desc: '근거를 갖춘 설득력 있는 글쓰기.' },
    { id: 'l12', youtubeId: 'hRHCFLY8ph4', module: '리포트 작성', title: 'AI 리포트 작성법 ③', desc: '검토·교정으로 완성도를 높이는 마무리.' },
    { id: 'l13', youtubeId: 'XsEKcOPIddo', module: '인용·출처', title: '대학생을 위한 인용·출처 관리', desc: '올바른 인용과 출처 관리로 신뢰도 높이기.' },
  ],
  // HTML 기초 수업 — youtubeId 는 링크 수신 후 채워주세요 (web01~web20 순서)
  web: [
    { id: 'w1', youtubeId: '', module: 'HTML/CSS', title: 'web01', desc: 'HTML 기초 수업 01강.' },
    { id: 'w2', youtubeId: '', module: 'HTML/CSS', title: 'web02', desc: 'HTML 기초 수업 02강.' },
    { id: 'w3', youtubeId: '', module: 'HTML/CSS', title: 'web03', desc: 'HTML 기초 수업 03강.' },
    { id: 'w4', youtubeId: '', module: 'HTML/CSS', title: 'web04', desc: 'HTML 기초 수업 04강.' },
    { id: 'w5', youtubeId: '', module: 'HTML/CSS', title: 'web05', desc: 'HTML 기초 수업 05강.' },
    { id: 'w6', youtubeId: '', module: 'HTML/CSS', title: 'web06', desc: 'HTML 기초 수업 06강.' },
    { id: 'w7', youtubeId: '', module: 'HTML/CSS', title: 'web07 예제활용 1', desc: 'HTML/CSS 예제 활용 ①.' },
    { id: 'w8', youtubeId: '', module: 'HTML/CSS', title: 'web08 예제활용 2', desc: 'HTML/CSS 예제 활용 ②.' },
    { id: 'w9', youtubeId: '', module: 'HTML/CSS', title: 'web09', desc: 'HTML 기초 수업 09강.' },
    { id: 'w10', youtubeId: '', module: 'HTML/CSS', title: 'web10', desc: 'HTML 기초 수업 10강.' },
    { id: 'w11', youtubeId: '', module: 'HTML/CSS', title: 'web11', desc: 'HTML 기초 수업 11강.' },
    { id: 'w12', youtubeId: '', module: 'HTML/CSS', title: 'web12 · 6장 CSS3 속성', desc: 'CSS3 주요 속성 다루기.' },
    { id: 'w13', youtubeId: '', module: 'HTML/CSS', title: 'web13', desc: 'HTML 기초 수업 13강.' },
    { id: 'w14', youtubeId: '', module: 'HTML/CSS', title: 'web14', desc: 'HTML 기초 수업 14강.' },
    { id: 'w15', youtubeId: '', module: 'HTML/CSS', title: 'web15', desc: 'HTML 기초 수업 15강.' },
    { id: 'w16', youtubeId: '', module: 'HTML/CSS', title: 'web16', desc: 'HTML 기초 수업 16강.' },
    { id: 'w17', youtubeId: '', module: 'JavaScript', title: 'web17 · js01', desc: '자바스크립트 기초 ①.' },
    { id: 'w18', youtubeId: '', module: 'JavaScript', title: 'web18 · js02', desc: '자바스크립트 기초 ②.' },
    { id: 'w19', youtubeId: '', module: 'jQuery', title: 'web19 · jq01', desc: 'jQuery 기초 ①.' },
    { id: 'w20', youtubeId: '', module: 'jQuery', title: 'web20 · jq02', desc: 'jQuery 기초 ②.' },
  ],
  // 파이썬 프로그래밍 (소프트웨어 기초) — 일부만 링크 수신, 나머지 youtubeId 비움
  python: [
    { id: 'p1', youtubeId: '', module: '소개·설치', title: '파이썬 프로그래밍 ①-1', desc: '프로그래밍 언어와 파이썬 소개.' },
    { id: 'p2', youtubeId: '', module: '소개·설치', title: '파이썬 프로그래밍 ①-2', desc: 'Print 명령과 간단한 계산식.' },
    { id: 'p3', youtubeId: 'c41ut8-rlgs', module: '소개·설치', title: 'Mac OS에 파이썬 설치하기', desc: '[경기대] 파이썬 설치와 환경 설정.' },
    { id: 'p4', youtubeId: '', module: '변수·터틀', title: '3주차 ① — 변수와 입출력', desc: '변수 개념과 입력·출력 방법.' },
    { id: 'p5', youtubeId: '', module: '변수·터틀', title: '3주차 ② — 터틀 그래픽', desc: '터틀 그래픽으로 다각형 그리기.' },
    { id: 'p6', youtubeId: '', module: '변수·입출력', title: '파이썬 3장 ①', desc: '변수와 계산기·퀴즈 프로그램.' },
    { id: 'p7', youtubeId: '', module: '변수·입출력', title: '파이썬 3장 ②', desc: 'print() 함수 사용법 자세히 보기.' },
    { id: 'p8', youtubeId: 'tSzQHCAVibc', module: '변수·입출력', title: '3장 — 반복학습 부분', desc: '3장 핵심 내용 반복 학습.' },
    { id: 'p9', youtubeId: '', module: '변수·입출력', title: '3장 빠른 강의', desc: '3장 요점 빠르게 훑어보기.' },
    { id: 'p10', youtubeId: '', module: '계산처리', title: '4장 파이썬 계산 처리', desc: '산술·나머지·지수 연산과 우선순위, 주석.' },
    { id: 'p11', youtubeId: '', module: '자료형', title: '5장 파이썬 자료의 종류', desc: '정수·실수·문자열·리스트와 형 변환.' },
    { id: 'p12', youtubeId: '', module: '자료형', title: '아나콘다 설치', desc: '가상환경을 위한 아나콘다 설치.' },
    { id: 'p13', youtubeId: '', module: '자료형', title: '주피터 노트북 실행', desc: '주피터 노트북으로 실습 환경 구축.' },
    { id: 'p14', youtubeId: '', module: '반복문·함수', title: '파이썬 반복문', desc: '반복문으로 반복 작업 처리하기.' },
    { id: 'p15', youtubeId: '', module: '반복문·함수', title: '파이썬 함수와 딕셔너리', desc: '함수 정의와 딕셔너리 활용.' },
  ],
}

// 홈 화면 "추천 영상"
export const featured = [
  { topic: 'creation', videoId: 'c1' },
  { topic: 'creation', videoId: 'c14' },
  { topic: 'literacy', videoId: 'l1' },
  { topic: 'literacy', videoId: 'l8' },
]

// 페이지당 영상 수 (2 x 3 그리드)
export const PER_PAGE = 6
