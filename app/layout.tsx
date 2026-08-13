import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Basant Kumar Mehta — Lead Software Engineer",
  description:
    "Portfolio of Basant Kumar Mehta — Lead Software Engineer building scalable web, mobile, real-time and AI-powered applications.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}