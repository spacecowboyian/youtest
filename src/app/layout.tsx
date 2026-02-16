import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Something's Happening",
  description: "A web application built with React and Next.js",
};

// EXTRA CREDIT: Switch theme based on user preference

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
