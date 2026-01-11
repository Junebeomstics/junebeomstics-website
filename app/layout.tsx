import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junbeom Kwon - Research & Publications",
  description: "Personal academic website of Junbeom Kwon, Ph.D. student in Psychology at University of Texas at Austin. Research in deep learning, neuroimaging, fMRI transformers, and structural connectivity analysis.",
  keywords: ["Junbeom Kwon", "neuroimaging", "deep learning", "fMRI", "brain imaging", "machine learning", "neuroscience", "psychology", "UT Austin", "SwiFT", "transformer"],
  authors: [{ name: "Junbeom Kwon" }],
  creator: "Junbeom Kwon",
  publisher: "Junbeom Kwon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: "Junbeom Kwon - Research & Publications",
    description: "Ph.D. student in Psychology at University of Texas at Austin. Research in deep learning and neuroimaging.",
    url: "/",
    siteName: "Junbeom Kwon",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junbeom Kwon - Research & Publications",
    description: "Ph.D. student in Psychology at University of Texas at Austin. Research in deep learning and neuroimaging.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
