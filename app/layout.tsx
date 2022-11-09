/* eslint-disable @next/next/no-head-element */

import Head from "next/head";
import Link from "next/link";
import "./globals.css";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html >
      <head>
        <title>Next Notebook - justmilosthings</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>
        <main>
          <nav>
            <Link href="/">
              Home
            </Link>
            <Link href="/notes">
              Notes
            </Link>
          </nav>
          {children}
          <Footer />
        </main>
        
      </body>
      
    </html>
  );
}
