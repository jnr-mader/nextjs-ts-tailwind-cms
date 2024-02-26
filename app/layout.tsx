import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ weight: ["400", "500", "600", "700"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "J.Mader portfolio",
  description: "Generated with NextJS managed by Outstatic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className}`}>
        {children}
      </body>
    </html>
  );
}
