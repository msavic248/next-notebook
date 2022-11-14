/* eslint-disable @next/next/no-head-element */

import "./globals.css";
import Head from "./head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <Head/>
      <body>
        <Navbar />
        <main>
          {children}
          <Footer />
        </main>
        
      </body>
      
    </html>
  );
}
