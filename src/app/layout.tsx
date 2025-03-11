import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PageLayout } from "@/components";
import { Providers } from "providers/Providers";
import '../styles/globals.scss'
import 'primereact/resources/themes/lara-dark-teal/theme.css';//prime react prebuilt theme

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Forge",
  description: "Where Code Meets Enchantment (and design)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers><PageLayout>{children}</PageLayout></Providers>
      </body>
    </html>
  );
}
