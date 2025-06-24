import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeaderBanner from "@/components/HeaderBanner";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

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
        <ThemeProvider attribute="class" defaultTheme="system">
          <ClerkProvider
            appearance={{
              variables: {
                colorPrimary: "#7c3aed",
                colorBackground: "rgba(255, 255, 255, 0.8)",
                colorText: "#1e293b",
                colorDanger: "#ef4444",
                colorSuccess: "#10b981",
                colorWarning: "#f59e0b",
                borderRadius: "1rem",
              },
              elements: {
                card: "backdrop-blur-md shadow-xl border border-violet-500/10",
                formButtonPrimary:
                  "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-indigo-600 hover:to-violet-600 transition-all duration-300 rounded-full",
                formFieldInput:
                  "rounded-xl border-violet-500/20 focus:border-violet-500/40 bg-white/80 backdrop-blur-sm",
                footer: "text-violet-600",
              },
            }}
          >
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
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
