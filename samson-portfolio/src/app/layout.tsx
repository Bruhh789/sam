import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samson Mitiku - Architect & Interior Designer",
  description:
    "Professional architect and interior designer creating innovative spaces that blend functionality with aesthetic excellence.",
  keywords:
    "architect, interior designer, architecture, design, residential, commercial, Samson Mitiku",
  authors: [{ name: "Samson Mitiku" }],
  openGraph: {
    title: "Samson Mitiku - Architect & Interior Designer",
    description:
      "Professional architect and interior designer creating innovative spaces that blend functionality with aesthetic excellence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
