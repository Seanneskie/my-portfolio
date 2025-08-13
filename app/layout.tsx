import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ApolloWrapper from "./apollo-provider";
import { Toaster } from "sonner";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seanne Cañete — Portfolio",
  description: "GraphQL-powered Next.js portfolio with shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Global notifications (Sonner) */}
          <Toaster
            theme="system"
            richColors
            closeButton
            position="top-right"
          />

          <Header />
          {/* Apollo provider */}
          <ApolloWrapper>{children}</ApolloWrapper>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
