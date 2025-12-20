import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TheVVibe.com: Top-Rated Products & Best Reviews",
  description: "Discover TheVVibe.com—the absolute best products, deals, and honest reviews. Stop searching, start living the Vibe today!",
  icons: {
    icon: "/static/favicon/favicon.ico",
    apple: "/static/favicon/apple-icon.png",
  },
  manifest: "/static/favicon/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="TheVVibe" />
        <meta name="application-name" content="TheVVibe" />
        <meta name="msapplication-TileColor" content="#03a6e7" />
        <meta name="msapplication-TileImage" content="/static/favicon/web-app-manifest-144x144.png" />
        <meta name="theme-color" content="#03a6e7" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
