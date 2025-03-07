import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { RedirectToSignIn, RedirectToSignUp, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SignedIn>
        <div className="h-screen flex">
          {/* left */}
          <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] ">
            <Link href="/" className="flex items-center justify-center gap-2 p-4 lg:justify-start">
              <Image src="/logo.png" alt="logo" width={32} height={32} />
              <span className="hidden lg:block">School Lama</span>
            </Link>
            <Menu />
          </div>
          {/* right */}
          <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
            <Navbar />
            {children}
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}