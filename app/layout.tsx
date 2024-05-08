import type { Metadata } from 'next';
import { Scheherazade_New, Cousine } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const scheherazadeNew = Scheherazade_New({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-heading',
});

const cousine = Cousine({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'cd katussska/portfolio',
  description: 'Created with love',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${scheherazadeNew.variable} ${cousine.variable}`}>
      <body>{children}</body>
    </html>
  );
}
