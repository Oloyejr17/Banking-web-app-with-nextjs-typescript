'use client'

import { useEffect, useState } from "react";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  // Check if the user is logged in when the component is mounted
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      // If no user is found in localStorage, redirect to sign-in page
      router.push("/sign-in");
    } else {
      // If the user exists, set loggedIn state to true
      setLoggedIn(true);
    }
  }, [router]);

  // If still checking if user is logged in, render a loading screen
  if (loggedIn === false) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex h-screen w-full font-inter">
      {/* Sidebar component that accepts user data */}
      <Sidebar user={JSON.parse(localStorage.getItem("user")!)} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={JSON.parse(localStorage.getItem("user")!)} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
