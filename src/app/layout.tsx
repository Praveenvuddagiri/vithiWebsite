"use client"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "VITHI IT SOLUTIONS",
// };



const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    loadDevMessages();
    loadErrorMessages();
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="flex justify-center">
          <div className="2xl:max-w-xl">{children}</div>
        </div> */}
        <ApolloProvider client={client}>

          {children}
        </ApolloProvider>

      </body>
    </html>
  );
}
