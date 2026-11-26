import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const description =
  "Junbeom Kwon is a Ph.D. student in Psychology at The University of Texas at Austin. He builds deep learning models and AI agents that connect brain structure to function, and tests whether they generalize across datasets.";

export const metadata: Metadata = {
  title: {
    default: "Junbeom Kwon",
    template: "%s | Junbeom Kwon",
  },
  description,
  keywords: [
    "Junbeom Kwon",
    "neuroimaging",
    "deep learning",
    "diffusion MRI",
    "tractography",
    "white matter",
    "fMRI",
    "AI agents",
    "BIDS2AI",
    "brainlife.io",
    "UT Austin",
    "Pestilli Lab",
  ],
  authors: [{ name: "Junbeom Kwon" }],
  creator: "Junbeom Kwon",
  publisher: "Junbeom Kwon",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Junbeom Kwon | Deep learning for brain structure and function",
    description,
    url: "/",
    siteName: "Junbeom Kwon",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junbeom Kwon | Deep learning for brain structure and function",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-[15px] font-normal leading-[1.75] text-fg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
