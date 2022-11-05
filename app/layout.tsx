/* eslint-disable @next/next/no-head-element */
import Link from "next/link";
import "./globals.css";
import localFont from "@next/font/google";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>
        <main className="">
          <nav>
            <Link href="/">
              Home
            </Link>
            <Link href="/notes">
              Notes
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
