import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeaderBanner from "@/components/HeaderBanner";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import Providers from "./Providers";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <Providers>
          <div className="relative max-w-[1920px] mx-auto px-6 pt-6 pb-8">
            {/* Decorative elements for modern look */}
            <div className="pointer-events-none fixed inset-0 z-30 select-none overflow-hidden">
              <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
              <div className="absolute -right-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
              <div className="absolute bottom-[10%] left-[20%] h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[100px]" />
            </div>
            <HeaderBanner />
            <Navbar />
            <div className="mt-8">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
