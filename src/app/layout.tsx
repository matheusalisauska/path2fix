import '@/styles/globals.css';
import { Inter } from 'next/font/google';

import Provider from '@/provider';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'APP_NAME',
    description: 'APP_DESCRIPTION',
    manifest: '/manifest.json',
    openGraph: {
        images: '/metadata/opengraph.png',
    },
    icons: [],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='pt-BR' className={inter.className}>
            <head>
                <link rel='icon' href='/favicon.ico' sizes='any' />
                <link rel='manifest' href='/manifest.json' />
                <meta
                    name='apple-mobile-web-app-status-bar-style'
                    content='black-translucent'
                />
                <meta
                    name='viewport'
                    content='initial-scale=1, viewport-fit=cover'
                />
                <meta property='og:image' content='<generated>' />
                <meta property='og:image:type' content='<generated>' />
                <meta property='og:image:width' content='<generated>' />
                <meta property='og:image:height' content='<generated>' />
            </head>
            <body className='bg-[#f5f5f5] max-w-screen w-full'>
                <Provider>{children}</Provider>
                <Toaster />
            </body>
        </html>
    );
}
