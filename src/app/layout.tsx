import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { sedan } from "./components/fonts";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Translate App - Tomás Silvente",
  description: "Tomás Silvente - For Dezure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sedan.className}>{children}</body>
    </html>
  );
}
