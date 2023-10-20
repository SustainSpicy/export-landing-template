import "./globals.css";
import { Barlow, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const barlow = Barlow({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const metadata = {
  title: "The Box",
  description: "We Make  Transport Easy!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="icon" href="/logo-icon.png" sizes="any" />
      </head>
      <body className={` ${barlow.variable}`}>{children}</body>
    </html>
  );
}
