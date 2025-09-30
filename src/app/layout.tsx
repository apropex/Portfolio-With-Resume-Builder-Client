import AuthProvider from "@/provider/AuthProvider";
import { ThemeProvider } from "@/provider/theme-provider";
import { iChildren } from "@/types";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio with resume builder",
  description:
    "This is my personal portfolio, where user can make their resume easily, and get some tech related blogs.",
};

export default function RootLayout({ children }: Readonly<iChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <main>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
