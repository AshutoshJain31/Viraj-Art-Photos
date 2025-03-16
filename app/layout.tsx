import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500'] });

export const metadata: Metadata = {
  title: 'Viraj Art Photos',
  description: 'Capturing the every movement of life',
  openGraph: {
    title: 'Viraj Art Photos',
    description: 'Capturing every moment of life',
    images: '/Assets/Viraj Logo.png', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}