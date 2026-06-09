// ============================================================
// 사이트 전역 데이터 — 회사 정보 / 네비게이션 / 영상 주제 / 동영상 목록
// 콘텐츠를 바꾸려면 대부분 이 파일만 수정하면 됩니다.
//
// ▶ 유튜브 영상 추가 방법
//   1. 유튜브에 영상 업로드 → 공개범위를 "미등록(링크 공개)" 으로 설정
//      (※ "비공개"는 임베드 재생이 불가하므로, 웹에 노출할 영상은 "미등록" 권장)
//   2. 영상 URL 의 v= 뒤 11자리 ID 를 youtubeId 에 입력
//      예) https://youtu.be/AbCdEf12345  →  youtubeId: 'AbCdEf12345'
//   3. 썸네일은 ID 로 자동 생성됩니다. (없으면 그라데이션 플레이스홀더 표시)
// ============================================================

export const company = {
  name: 'AICADEMY',
  nameKo: '에이아이카데미',
  fullName: 'AICADEMY ONLINE LEARNING',
  tagline: '온라인으로 배우는 AI & AI 리터러시',
  intro: [
    '에이아이카데미는 누구나 쉽게 인공지능을 이해하고 활용할 수 있도록, 검증된 강의를 온라인 동영상으로 제공하는 교육 플랫폼입니다.',
    'AI 기초부터 생성형 AI 실무, 그리고 디지털 시민이 갖추어야 할 AI 리터러시까지 — 체계적인 커리큘럼으로 여러분의 한 걸음을 함께합니다.',
  ],
  email: 'edu@dreamitbiz.com',
  tel: '02-1234-5678',
  address: '서울특별시 강남구 테헤란로 (DreamIT Biz)',
  copyright: '© 2026 AICADEMY · DreamIT Biz. All rights reserved.',
  social: [
    { label: 'YouTube', url: 'https://youtube.com' },
    { label: 'Blog', url: 'https://dreamitbiz.com' },
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
    title: '엄선된 동영상 강의',
    desc: '현업 전문가가 직접 제작한 고품질 영상으로, 언제 어디서나 반복 학습하세요.',
  },
  {
    icon: '🧭',
    title: '주제별 커리큘럼',
    desc: 'AI 기초·리터러시·생성형 AI·프롬프트·윤리까지 단계별로 구성된 학습 경로.',
  },
  {
    icon: '📱',
    title: '모바일 최적화',
    desc: 'PC·태블릿·스마트폰 어디서든 끊김 없이 시청 가능한 반응형 플레이어.',
  },
  {
    icon: '🌗',
    title: '라이트 & 다크 모드',
    desc: '눈이 편안한 다크 테마와 밝은 라이트 테마를 자유롭게 전환하세요.',
  },
]

// ============================================================
// 영상 주제 (= 상단 네비 "영상 강의" 하위메뉴 / 라우트 키)
// ============================================================
export const topics = [
  {
    key: 'ai-basics',
    label: 'AI 기초',
    title: 'AI 기초 이해',
    headline: '인공지능, 여기서부터 시작하세요',
    desc: '머신러닝·딥러닝의 기본 개념부터 AI가 동작하는 원리까지, 비전공자도 이해할 수 있게 풀어드립니다.',
    accent: 'royal',
  },
  {
    key: 'ai-literacy',
    label: 'AI 리터러시',
    title: 'AI 리터러시',
    headline: 'AI 시대를 살아가는 힘',
    desc: 'AI를 비판적으로 이해하고 책임감 있게 활용하는 디지털 시민의 핵심 역량을 기릅니다.',
    accent: 'sky',
  },
  {
    key: 'generative',
    label: '생성형 AI',
    title: '생성형 AI 실무',
    headline: '일잘러를 위한 생성형 AI 활용',
    desc: 'ChatGPT·Claude·이미지 생성 도구를 업무와 학습에 바로 적용하는 실전 노하우.',
    accent: 'mint',
  },
  {
    key: 'prompt',
    label: '프롬프트',
    title: '프롬프트 엔지니어링',
    headline: '원하는 답을 끌어내는 질문의 기술',
    desc: 'AI에게 효과적으로 지시하고 원하는 결과를 얻어내는 프롬프트 설계 방법을 익힙니다.',
    accent: 'amber',
  },
  {
    key: 'ethics',
    label: 'AI 윤리',
    title: 'AI 윤리와 사회',
    headline: '신뢰할 수 있는 AI를 위하여',
    desc: '편향·프라이버시·저작권 등 AI가 던지는 사회적 질문과 책임 있는 활용 기준을 다룹니다.',
    accent: 'royal',
  },
]

// ============================================================
// 동영상 데이터 (topic 키별 배열)
//  - youtubeId : 유튜브 영상 11자리 ID (미등록/링크공개 영상 권장)
//  - 실제 운영 시 아래 youtubeId 를 본인 영상 ID 로 교체하세요.
// ============================================================

// 데모용 영상 생성 헬퍼 (실제 ID 로 교체 전까지 플레이스홀더로 동작)
function demo(topicKey, prefix, count) {
  return Array.from({ length: count }, (_, i) => ({
    id: `${topicKey}-${i + 1}`,
    youtubeId: '', // ← 여기에 유튜브 ID 입력 (비우면 그라데이션 썸네일 표시)
    title: `${prefix} ${i + 1}강`,
    desc: '강의 설명을 입력하세요. 영상의 핵심 내용을 한두 문장으로 요약합니다.',
    duration: `${8 + ((i * 3) % 22)}:${(i * 17) % 60 < 10 ? '0' : ''}${(i * 17) % 60}`,
    level: ['입문', '기초', '중급', '심화'][i % 4],
  }))
}

export const videos = {
  'ai-basics': [
    {
      id: 'ai-basics-1',
      youtubeId: '',
      title: '인공지능이란 무엇인가',
      desc: 'AI, 머신러닝, 딥러닝의 차이를 한 번에 정리합니다.',
      duration: '12:40',
      level: '입문',
    },
    {
      id: 'ai-basics-2',
      youtubeId: '',
      title: '기계는 어떻게 학습하는가',
      desc: '지도학습·비지도학습·강화학습의 개념과 사례.',
      duration: '15:10',
      level: '입문',
    },
    {
      id: 'ai-basics-3',
      youtubeId: '',
      title: '신경망과 딥러닝의 원리',
      desc: '뉴런에서 출발해 딥러닝이 동작하는 직관을 잡습니다.',
      duration: '18:25',
      level: '기초',
    },
    ...demo('ai-basics', 'AI 기초', 9),
  ],
  'ai-literacy': [
    {
      id: 'ai-literacy-1',
      youtubeId: '',
      title: 'AI 리터러시, 왜 필요한가',
      desc: 'AI 시대 필수 역량으로서의 리터러시 개념.',
      duration: '10:30',
      level: '입문',
    },
    {
      id: 'ai-literacy-2',
      youtubeId: '',
      title: 'AI가 만든 정보 비판적으로 읽기',
      desc: '환각·허위정보·딥페이크를 분별하는 법.',
      duration: '14:05',
      level: '기초',
    },
    ...demo('ai-literacy', 'AI 리터러시', 10),
  ],
  generative: [
    {
      id: 'generative-1',
      youtubeId: '',
      title: 'ChatGPT & Claude 제대로 쓰기',
      desc: '대화형 AI를 업무에 활용하는 기본기.',
      duration: '16:50',
      level: '기초',
    },
    {
      id: 'generative-2',
      youtubeId: '',
      title: '문서·보고서 작성 자동화',
      desc: '생성형 AI로 초안 작성 시간을 절반으로.',
      duration: '13:20',
      level: '중급',
    },
    ...demo('generative', '생성형 AI', 11),
  ],
  prompt: [
    {
      id: 'prompt-1',
      youtubeId: '',
      title: '좋은 프롬프트의 5가지 원칙',
      desc: '맥락·역할·형식·예시·제약을 활용한 설계.',
      duration: '11:15',
      level: '기초',
    },
    ...demo('prompt', '프롬프트', 8),
  ],
  ethics: [
    {
      id: 'ethics-1',
      youtubeId: '',
      title: 'AI 편향과 공정성',
      desc: '데이터 편향이 만드는 문제와 대응 방안.',
      duration: '12:00',
      level: '기초',
    },
    ...demo('ethics', 'AI 윤리', 7),
  ],
}

// 홈 화면 "추천 영상" — 각 주제 대표 영상 모음
export const featured = [
  { topic: 'ai-basics', videoId: 'ai-basics-1' },
  { topic: 'generative', videoId: 'generative-1' },
  { topic: 'ai-literacy', videoId: 'ai-literacy-1' },
]

// 페이지당 영상 수 (2 x 3 그리드)
export const PER_PAGE = 6
