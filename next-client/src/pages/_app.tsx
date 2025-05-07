import { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "next/font/google";
import '../../styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hunger Impact API</title>
        <meta name="description" content="Predict the future of your hunger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={inter.className}><Component{...pageProps}/></div>
    </>
  );
};
