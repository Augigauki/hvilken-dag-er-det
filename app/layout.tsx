import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./reset.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hvilken dag er det?",
  description: "Hendig for å finne ut hvilken dag det er!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
