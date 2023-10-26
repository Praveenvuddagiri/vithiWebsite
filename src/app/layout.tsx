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
      <body className='flex justify-center items-center'>
        <div className="flex min-h-screen flex-col items-center max-w-screen-2xl justify-center">
          {children}
        </div>
          
      </body>
    </html>
  );
}
