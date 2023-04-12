import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Users from "@/components/Users";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 px-24">
      <Head>
        <title>Users list</title>
      </Head>
      <Header />
      <Users />
    </main>
  );
}
