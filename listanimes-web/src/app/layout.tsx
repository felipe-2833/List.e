import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "List A",
  description: "Criado por Felipe Levy e Samir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
