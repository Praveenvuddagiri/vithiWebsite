import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "VITHI IT SOLUTIONS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="flex justify-center">
          <div className="2xl:max-w-xl">{children}</div>
        </div> */}
        {children}
      </body>
    </html>
  );
}
