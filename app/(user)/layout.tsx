import { Inter } from "next/font/google";
import "@/app/globals.css";
import { inter, suwannaphum, localCustomFont } from "./font";
import { Metadata } from "next";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${suwannaphum.variable} ${inter.variable} ${localCustomFont.variable}`}>
        {children}
        </body>
    </html>
  );
}
