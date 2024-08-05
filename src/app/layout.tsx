import Header from "@/core/aplication/interfaces/components/header/header";
import StoreProvider from "@/core/aplication/store/store-provider";
import CacheProvider from "@/infra/cache/cache-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../core/aplication/interfaces/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Soft",
  description: "NFT store front end example to showcase development skills with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className} >
        <CacheProvider>
          <StoreProvider>
            <Header />

            {children}
            
          </StoreProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
