import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Montserrat_Alternates } from "next/font/google";

const montserrat = Montserrat_Alternates({ subsets: ["latin"], weight: ["700"] });

const Navbar = () => {
  return (
    <>
      <div className={montserrat.className}>
        <header className="flex items-center justify-between py-3 border-b bg-background sm:px-6">
          <Link href="/" className="flex items-center gap-2" prefetch={true}>
            <div className="hover:-translate-y-0.5 hover:translate-x-0.5 ">
              <Image src="/rutugandh.svg" width="200" height="200" alt="Acme Inc" />
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-36 text-l">
            <Link href="/" className="text-muted-foreground hover:text-foreground" prefetch={true}>
              Home
            </Link>
            <Link
              href="./plants"
              className="text-muted-foreground hover:text-foreground"
              prefetch={true}>
              Plants
            </Link>
            <Link
              href="/plants"
              className="text-muted-foreground hover:text-foreground"
              prefetch={true}>
              Pots
            </Link>
            <Link
              href="/plants"
              className="text-muted-foreground hover:text-foreground"
              prefetch={true}>
              All Products
            </Link>
            <div>
              <SearchIcon className="absolute text-muted-foreground m-1.5 px-1" />
              <Input
                type="search"
                placeholder="Search products"
                className="rounded-lg bg-muted px-28"
              />
            </div>
          </nav>
          <div className="flex items-center gap-16">
            <Link href="./bag" prefetch={true}>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Image src="/bag.svg" width="32" height="32" alt="Avatar" />
              </Button>
            </Link>
            <Link href="./saved" prefetch={true}>
              <Button variant="ghost" size="icon">
                <Image src="/liked.svg" width="32" height="32" alt="Avatar" />
              </Button>
            </Link>
            <Link href="./profile" prefetch={true}>
              <Button variant="ghost" size="icon">
                <Image src="/profile.svg" width="32" height="32" alt="Avatar" />
              </Button>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
