import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeffrey Ho Personal Website",
  description: "Ho Kah Wai (Jeffrey Ho) personally created website to describe more about myself. Website generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="h-max flex items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
