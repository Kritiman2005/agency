import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import SmoothScroll from "../components/SmoothScroll";
import "./globals.css";

export const metadata = {
  title: "UpScale Agency",
  description: "We design, build, and scale digital products that drive measurable business growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts – same as original */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amarante&family=Outfit:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#050505] text-[#ffffff] overflow-x-hidden">
        <SmoothScroll>
          {/* Global Grain/Film-noise Texture */}
          <div className="noise-overlay" />
          {children}
          <SpeedInsights />
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
