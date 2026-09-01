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
      <body className="antialiased">
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
