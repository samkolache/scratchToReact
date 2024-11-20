

import { Source_Code_Pro } from 'next/font/google';
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Choose weights as needed
  variable: '--font-source-code-pro', // Optional: create a CSS variable for this font
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sourceCodePro.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
