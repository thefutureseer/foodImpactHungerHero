import { Inter } from "next/font/google";
import Head from "next/head";
import { Metadata } from "next";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hunger Impact API",
  description: "Predict the future of your hunger",
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={metadata.description || ""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </>
  );
};

export default Layout;
