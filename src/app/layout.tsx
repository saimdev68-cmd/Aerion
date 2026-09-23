import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aerion-motion.vercel.app"),
  title: "AERION — The Art of Motion",
  description:
    "A cinematic interactive supercar experience built with modern frontend technologies, 3D animation and scroll-driven interaction.",
  keywords: [
    "AERION",
    "supercar",
    "hypercar",
    "automotive scroll animation",
    "automotive design",
    "luxury supercar",
    "creative frontend",
    "interactive portfolio",
  ],
  authors: [{ name: "AERION Concept Study" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "AERION — The Art of Motion",
    description:
      "A cinematic interactive supercar experience built with modern frontend technologies, 3D animation and scroll-driven interaction.",
    url: "https://aerion-motion.vercel.app",
    siteName: "AERION",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/frame_001.jpg",
        width: 1280,
        height: 720,
        alt: "AERION Concept Supercar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AERION — The Art of Motion",
    description:
      "A cinematic interactive supercar experience built with modern frontend technologies, 3D animation and scroll-driven interaction.",
    images: ["/images/frame_001.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050505] text-white antialiased selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
