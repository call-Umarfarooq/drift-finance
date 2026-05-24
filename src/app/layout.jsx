import { Geist, Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import FloatingEmailButton from "@/components/FloatingEmailButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = localFont({
  src: "../../public/font/playfair-display.bold-italic.ttf",
  variable: "--font-playfair",
});

export const metadata = {
  title: {
    default: "Drift Financial | Empowering Your Financial Future",
    template: "%s | Drift Financial",
  },
  description: "Empowering your financial future with tailored loan options, professional mortgage calculation, finance education, and expert financial services.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        {children}
        <FloatingEmailButton />
      </body>
    </html>
  );
}
