import * as React from "react";
import Head from "next/head";
import Dashboard from "./dashboard/Dashboard";
import { SideMenu, Header, Login } from "@/components";
import { useSession } from "next-auth/react";
import styles from "@/styles/global.module.css";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        {session && (
          <>
            <SideMenu />
            <Dashboard />
          </>
        )}
        <Login />
      </main>
    </>
  );
}
