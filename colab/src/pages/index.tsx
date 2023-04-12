import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <title>Users list</title>
      </Head>
      <div className="relative flex place-items-center">
        <Image
          className="relative"
          src="/colab-logo.png"
          alt="Colab.re Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
