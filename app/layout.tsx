import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frosteria Arc Pro — The Fan Your Home Has Been Waiting For",
  description: "Misting fan that actually cools. 4L tank, 70° oscillation, whisper-quiet 35dB. CE certified. Free EU shipping.",
  keywords: "misting fan, cooling fan, frosteria, arc pro, standing fan, water mist fan",
  openGraph: {
    title: "Frosteria Arc Pro",
    description: "Stay Cool. Live Beautifully.",
    url: "https://frosteria.com",
    siteName: "Frosteria",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0d1b27" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>{children}</body>
    </html>
  );
}
