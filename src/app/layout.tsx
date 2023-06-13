"use client"

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { JetBrains_Mono } from "next/font/google";

const jetBrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Portifólio - Luan Henrique",
  description:
    "Conheça um pouco sobre a minha vida e alguns projetos meus como desenvolvedor web!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={jetBrains.className}>
          {children}
      </body>
    </html>
  );
}
