import SmoothScroll from "./ui/components/SmoothScroll";
import Providers from "./ui/components/Providers";

import { interTight } from "./utils/fonts";

import "./globals.css";

export const metadata = {
  title: "Enos Nsamba — Creative Developer",
  description: "Portfolio Website for Enos Nsamba, A creative Software Engineer specialised in creating Highly Performant and Interactive Websites Using Javascript.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={interTight.className}>
        <Providers>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
