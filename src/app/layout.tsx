import './globals.css';
import { Inter } from 'next/font/google';
import ListContextProvider from '@/app/list-context';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <ListContextProvider>{children}</ListContextProvider>
            </body>
        </html>
    );
}
