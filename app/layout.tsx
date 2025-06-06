import type { Metadata } from "next";
import "./globals.css";

import { QueryClientProvider } from "@components";

export const metadata: Metadata = {
  title: "강승택 프론트엔드",
  description: "위버 프론트엔드 과제",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body>
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
