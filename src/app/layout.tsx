import "./globals.css";

import { constructMetadata } from "@/lib/metadata";

import SmoothScroll from "@/components/SmoothScroll";

import { NohemiRegular } from "@/lib/fonts";
import FixedBottomNav from "@/components/FixedBottomNav";
import Cursor from "@/components/Cursor";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NohemiRegular.className} antialiased bg-black text-white`}
      >
        <SmoothScroll>
          {children}
          <FixedBottomNav />
          <Cursor />
        </SmoothScroll>
      </body>
    </html>
  );
}
