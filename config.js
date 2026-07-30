// 김앤양 — 온라인(Netlify/Vercel) 배포 설정 파일
// ─────────────────────────────────────────────────────────────
// 아래 KIMYANG_API_BASE 값을 백엔드(agent-backend) 서버 주소로 바꾸세요.
//   · 끝에 /api 는 붙이지 마세요 — 코드가 자동으로 붙입니다.
//   · 예: window.KIMYANG_API_BASE = "https://kimandyang-backend.onrender.com";
//
// 비워두면("") 백엔드 없이 "데모 모드"로 동작합니다(내장 예시 데이터로 로그인·조직·AI정제·
// 담당자자동배정·의뢰현황·아마란스발송을 전부 시연 가능). 백엔드 연결 시 실제 OpenAI 정제로 전환됩니다.
//
// ⚠️ 이 파일에는 절대 OpenAI/아마란스 같은 비밀 키를 넣지 마세요.
//    (이 파일은 브라우저에 그대로 노출됩니다. 비밀 키는 오직 백엔드 서버의 환경변수에만 둡니다.)
window.KIMYANG_API_BASE = "https://kimandyang-backend.onrender.com";
