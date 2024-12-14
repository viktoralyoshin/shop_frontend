"use client";

import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "./providers";
import { EnumTokens } from "@/services/auth-token.service";
import { useEffect } from "react";
import { useAuthStore } from "@/stores/use-auth-store";
import Cookies from "js-cookie"
import { userService } from "@/services/user.service";

const nunito = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);

  const setAuthentication = useAuthStore((state) => state.setAuthentication);
  const setUser = useAuthStore((state)=>state.setUser)

  useEffect(() => {
    if (accessToken) {
      setAuthentication(true);

      const fetchUser = async () => {
        setUser((await userService.getProfile()).user)
      }
      
      fetchUser()
    }
  }, [accessToken]);

  return (
    <html lang="en">
      <body className={`min-h-screen font-sans antialiased ${nunito.variable}`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
