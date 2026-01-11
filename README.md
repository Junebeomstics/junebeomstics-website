# Junbeom Kwon - Personal Academic Website

Personal academic website showcasing research interests, publications, and professional information.

## Features

- **Home/About Page**: Introduction, education, and research interests overview
- **Research Page**: Detailed research interests and ongoing projects
- **Publications Page**: Published papers, preprints, and manuscripts in preparation
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design using Tailwind CSS

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended) or static export

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Static Export (Optional)

To generate a static site:

1. Update `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
}
```

2. Build:
```bash
npm run build
```

The static files will be in the `out` directory.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home/About page
│   ├── research/
│   │   └── page.tsx        # Research interests page
│   ├── publications/
│   │   └── page.tsx        # Publications page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with contact info
│   ├── PublicationCard.tsx # Publication card component
│   └── ProjectCard.tsx     # Research project card component
├── data/
│   └── cv-data.ts          # CV data (publications, projects, etc.)
└── public/                 # Static files
```

## Customization

### 콘텐츠 수정

- `data/cv-data.ts`: 논문, 연구 프로젝트, 학력, 개인 정보 등 모든 데이터

### 프로필 사진 추가

1. 프로필 사진을 `public/profile.jpg`에 저장 (권장 크기: 400x400px, 정사각형)
2. `components/ProfileImage.tsx` 파일에서 `hasProfileImage`를 `true`로 변경

```typescript
const hasProfileImage = true; // false에서 true로 변경
```

### 디자인 커스터마이징

- 색상: `tailwind.config.ts`에서 테마 색상 수정
- 스타일: 각 컴포넌트 파일에서 Tailwind CSS 클래스 수정
- 아이콘: `react-icons` 라이브러리에서 다른 아이콘 선택 가능

## Deployment

웹사이트를 인터넷에 배포하여 다른 사람들이 검색할 수 있도록 하려면 `DEPLOYMENT.md` 파일을 참고하세요.

### 빠른 배포 (Vercel)

1. GitHub에 코드 업로드
2. [Vercel](https://vercel.com)에 가입
3. GitHub 저장소 연결 및 자동 배포

자세한 내용은 `DEPLOYMENT.md`를 참고하세요.

## License

Personal website - All rights reserved.
