import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Bianca | Portofolio',
  description: 'My UI/UX Designs over time.',
  robots: {
    index: true,        // Permite Google să indexeze paginile (textul)
    follow: true,       // Permite Google să urmărească link-urile
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true, //Oprește indexarea imaginilor în Google Images!
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}