import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

/* 🔹 Metadata (important for real apps) */
export const metadata = {
  title: "SVBS Hostel",
  description: "Smart Hostel Management & Easy Living",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans bg-gray-50 text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}