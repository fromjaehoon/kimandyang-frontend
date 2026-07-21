// 김앤양 — 온라인(Netlify) 배포 설정 파일
// ─────────────────────────────────────────────────────────────
// 아래 KIMYANG_API_BASE 값을 백엔드(agent-backend) 서버 주소로 바꾸세요.
//   · 끝에 /api 는 붙이지 마세요 — 코드가 자동으로 붙입니다.
//   · 예: window.KIMYANG_API_BASE = "https://kimandyang-backend.onrender.com";
//
// 백엔드를 아직 배포하지 않았다면 빈 값("")으로 두세요.
//   → 이 경우 로그인/AI 정제/아마란스 발송 같은 서버 기능은 동작하지 않고,
//      화면에는 "백엔드 서버 주소가 설정되지 않았습니다" 안내가 표시됩니다(UI 구경은 가능).
//
// ⚠️ 이 파일에는 절대 OpenAI/아마란스 같은 비밀 키를 넣지 마세요.
//    (이 파일은 브라우저에 그대로 노출됩니다. 비밀 키는 오직 백엔드 서버의 환경변수에만 둡니다.)
// [2026-07-21] render.yaml의 서비스명(kimandyang-backend) 기준 예상 URL로 채워둠 — Render에서
// 실제 배포 후 대시보드에 표시되는 주소가 다르면 (이미 그 이름이 사용 중이면 Render가 suffix를 붙일 수 있음)
// 이 값을 실제 주소로 교체해야 합니다.
window.KIMYANG_API_BASE = "https://kimandyang-backend.onrender.com";
