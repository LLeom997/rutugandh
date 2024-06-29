/**
 * v0 by Vercel.
 * @see https://v0.dev/t/enNwI2d04WC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Montserrat_Alternates } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat_Alternates({ subsets: ["latin"], weight: ["700"] });

export default function Component() {
  return (
    <>
      <main className={montserrat.className}>
        <div className="flex flex-col min-h-screen px-5 py-3 ">
          <header className="flex items-center justify-between px-4 py-3 border-b bg-background sm:px-6">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <Image src="/rutugandh.svg" width="200" height="200" alt="Acme Inc" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="hidden md:flex items-center gap-36 text-l">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}>
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
                prefetch={false}>
                Pots
              </Link>
            </nav>
            <div className="flex items-center gap-16">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Image src="/bag.svg" width="32" height="32" alt="Avatar" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Image src="/liked.svg" width="32" height="32" alt="Avatar" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Image src="/profile.svg" width="32" height="32" alt="Avatar" />
                <span className="sr-only">User Menu</span>
              </Button>
            </div>
          </header>
          <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container grid px-4  md:px-6 lg:grid-cols-2 lg:gap-12">
                <Image src="/rutugandh.svg" width="500" height="500" alt="Acme Inc" />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="lg:text-7xl text-[#4C7E36] font-bold sm:text-5xl">
                      Your Plant Paradise Delivered !
                    </h2>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      href="/contact"
                      className=" inline-flex h-10 items-center justify-center rounded-md bg-[#4C7E36] px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#86BA78] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}>
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </main>
    </>
  );
}

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
