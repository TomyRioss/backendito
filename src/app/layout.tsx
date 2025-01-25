import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/Layout/Navbar';
import { Footer } from '@/components/Layout/Footer';
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import ThemeContextProvider from '@/shared/styles/themes/themeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'title',
  description: 'description',
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
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
