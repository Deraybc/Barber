import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar/navBar";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from "sonner";
import { LoaderProvider } from "@/contexts/LoaderContext";

export const metadata: Metadata = {
  title: "Kyomu Barber Studio",
  description: "Kyomu Barber Studio",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <AuthProvider>
          <NavBar />
          <LoaderProvider>
            <main>{children}</main>
          </LoaderProvider>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
