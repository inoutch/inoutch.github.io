import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inoutch's ページ",
  description: "Inoutch's ページ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
