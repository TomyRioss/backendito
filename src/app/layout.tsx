import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/Layout/Navbar';
import { Footer } from '@/components/Layout/Footer';
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import ThemeContextProvider from '@/shared/styles/themes/themeProvider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Backendito | Desarrollo Web',
  description: 'Backendito es un proyecto de desarrollo web',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/backenditoIcon.ico" />
        {/* Código de Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4141031787649415"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Analytics />
        <SpeedInsights />
        <ThemeContextProvider>
          <NextIntlClientProvider messages={messages}>
            <NavBar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
