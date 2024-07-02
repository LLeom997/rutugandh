import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Montserrat_Alternates } from "next/font/google";
import { SearchIcon } from "@/lib/icons";

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
