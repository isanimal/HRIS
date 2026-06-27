import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BordUp HRIS IDOR Lab",
  description: "Local HRIS training lab with an intentionally vulnerable profile endpoint.",
};

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
