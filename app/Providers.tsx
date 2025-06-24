// app/Providers.tsx
"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
        {children}
      </ClerkProvider>
    </ThemeProvider>
  );
}
