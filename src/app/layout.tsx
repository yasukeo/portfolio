import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yasser Etebbai — Développeur Full-Stack",
    template: "%s | Yasser Etebbai",
  },
  description:
    "Portfolio de Yasser Etebbai — Développeur Full-Stack (Next.js/TypeScript) • Java/Spring Boot • Élève ingénieur en IA & Data",
  metadataBase: new URL("https://yasser-etebbai.vercel.app"),
  openGraph: {
    title: "Yasser Etebbai — Développeur Full-Stack",
    description:
      "Développeur Full-Stack (Next.js/TypeScript) • Java/Spring Boot • Élève ingénieur en IA & Data",
    url: "https://yasser-etebbai.vercel.app",
    siteName: "Yasser Etebbai",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasser Etebbai — Développeur Full-Stack",
    description:
      "Développeur Full-Stack (Next.js/TypeScript) • Java/Spring Boot • Élève ingénieur en IA & Data",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
