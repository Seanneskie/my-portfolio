import type { Metadata } from "next";
import "./globals.css";
import ApolloWrapper from "./apollo-provider";
import { Toaster } from "sonner";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";


export const metadata: Metadata = {
  title: "Seanne Cañete — Portfolio",
  description: "GraphQL-powered Next.js portfolio with shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans">
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
