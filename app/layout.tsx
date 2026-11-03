import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
export const metadata: Metadata = {
  title: "AUSAD CREATIVES | Creator Growth Library",
  description: "The Creator Growth Kit — practical resources to plan, create, grow and monetise your content.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
  <html lang="en">
    <body>
      {children}
      <Analytics />
    </body>
  </html>
);

