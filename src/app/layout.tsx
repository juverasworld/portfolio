import Script from 'next/script';
import { Montserrat } from 'next/font/google'

import { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // You can customize weights
  variable: '--font-montserrat',
})

const title = 'Obasi Ifebuche Vera | Frontend  Developer';
const description =
  "I'm skilled in HTML, CSS, JavaScript, React, Tailwind CSS, TypeScript, Next.js, Git & GitHub. I'm especially drawn to JavaScript and love building in its ecosystem. My goal is to not just build, but to build useful — platforms that make people's lives easier and businesses more efficient";
// const url = 'https://sagarshah.dev';
const url = "https://obasi-vera.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: ["Frontend Developer", "React Developer", "Next.js Developer"],
  creator: "Obasi Ifebuche Vera",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/images/1.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@vera_ifebuche",
    images: "/1.jpg",
  },
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
    
      <body className={`${montserrat.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
