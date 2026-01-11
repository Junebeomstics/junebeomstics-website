# 배포 가이드 (Deployment Guide)

이 웹사이트를 인터넷에 배포하여 다른 사람들이 검색할 수 있도록 하는 방법입니다.

## 방법 1: Vercel 배포 (추천 - 가장 쉬움)

Vercel은 Next.js를 만든 회사에서 제공하는 무료 호스팅 서비스입니다. GitHub와 연동하여 자동 배포가 가능합니다.

### 단계별 가이드

1. **GitHub에 코드 업로드**
   ```bash
   # Git 초기화 (아직 안 했다면)
   git init
   git add .
   git commit -m "Initial commit"
   
   # GitHub에 새 저장소 생성 후
   git remote add origin https://github.com/yourusername/junebeomstics-website.git
   git branch -M main
   git push -u origin main
   ```

2. **Vercel 가입 및 배포**
   - [Vercel](https://vercel.com)에 가입 (GitHub 계정으로 로그인 가능)
   - "New Project" 클릭
   - GitHub 저장소 선택
   - 프로젝트 설정:
     - Framework Preset: Next.js (자동 감지됨)
     - Root Directory: `./` (기본값)
   - "Deploy" 클릭

3. **환경 변수 설정 (선택사항)**
   - 프로젝트 설정 → Environment Variables
   - `NEXT_PUBLIC_SITE_URL` 추가 (예: `https://your-domain.vercel.app`)

4. **도메인 연결 (선택사항)**
   - 프로젝트 설정 → Domains
   - 원하는 도메인 추가 (예: `junebeomkwon.com`)

### 배포 후 확인사항

- 자동으로 `https://your-project.vercel.app` 주소가 생성됩니다
- 코드를 푸시하면 자동으로 재배포됩니다
- 무료 플랜으로도 충분히 사용 가능합니다

## 방법 2: Netlify 배포

1. **GitHub에 코드 업로드** (위와 동일)

2. **Netlify 배포**
   - [Netlify](https://www.netlify.com)에 가입
   - "Add new site" → "Import an existing project"
   - GitHub 저장소 선택
   - 빌드 설정:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - "Deploy site" 클릭

## 방법 3: 정적 사이트로 빌드 (다른 호스팅 사용)

정적 HTML 파일로 빌드하여 GitHub Pages, AWS S3 등에 배포할 수 있습니다.

1. **next.config.js 수정**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   
   module.exports = nextConfig
   ```

2. **빌드**
   ```bash
   npm run build
   ```

3. **out 폴더의 내용을 호스팅 서비스에 업로드**

## SEO 최적화 확인

배포 후 다음을 확인하세요:

1. **Google Search Console 등록**
   - [Google Search Console](https://search.google.com/search-console)에 접속
   - 사이트 추가 및 소유권 확인
   - sitemap 제출: `https://your-domain.com/sitemap.xml`

2. **소셜 미디어 미리보기 확인**
   - [Open Graph Preview](https://www.opengraph.xyz/)에서 확인
   - Facebook, Twitter 등에서 링크 공유 시 미리보기 확인

3. **검색 엔진 인덱싱 확인**
   - Google에서 `site:your-domain.com` 검색
   - 몇 주 후 검색 결과에 나타나기 시작합니다

## 프로필 사진 추가하기

1. `public/profile.jpg` 파일 추가 (권장 크기: 400x400px)
2. `components/ProfileImage.tsx` 파일에서 `hasProfileImage`를 `true`로 변경

## 추가 개선사항

- Google Analytics 추가
- 뉴스레터 구독 기능 추가
- 블로그 섹션 추가
- 다국어 지원

## 문제 해결

### 빌드 오류
- `npm install` 다시 실행
- `node_modules` 삭제 후 재설치

### 이미지가 표시되지 않음
- `public` 폴더에 이미지가 있는지 확인
- Next.js Image 컴포넌트 사용 확인

### SEO가 작동하지 않음
- 환경 변수 `NEXT_PUBLIC_SITE_URL` 설정 확인
- sitemap.xml 접근 가능한지 확인 (`/sitemap.xml`)
