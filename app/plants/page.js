"use client";
import Link from "next/link";
import { Montserrat_Alternates } from "next/font/google";
import Image from "next/image";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const montserrat = Montserrat_Alternates({ subsets: ["latin"], weight: ["700"] });

export default function Component() {
  return (
    <div className={montserrat.className}>
      <div className="flex min-h-screen w-full bg-background ">
        <div className="hidden w-64 flex-col border-r bg-background p-4 md:flex">
          <div className="mb-6 flex items-center">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <Image src="/rutugandh.svg" width={300} height={300} alt="rutugandh" />{" "}
            </Link>
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-medium">Filter</h3>
              <div className="space-y-2">
                <Accordion type="single" collapsible>
                  <AccordionItem value="category">
                    <AccordionTrigger className="text-base">Category</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-2">
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox />
                          Plants
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox />
                          Pots
                        </Label>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="price">
                    <AccordionTrigger className="text-base">Price</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-2">
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox />
                          ₹0 - ₹50
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox />
                          ₹50 - ₹100
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox />
                          ₹100 - ₹500
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox />
                          ₹500+
                        </Label>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                  <AccordionItem value="rating">
                    <AccordionTrigger className="text-base">Rating</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-2">
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox />4 stars and above
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox />3 stars and above
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox />2 stars and above
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox />1 star and above
                        </Label>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium">Sort</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <ArrowUpDownIcon className="mr-2 h-4 w-4" />
                    Sort by
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuRadioGroup value="featured">
                    <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="low">Price: Low to High</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="high">Price: High to Low</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <header className="sticky py-12 px-10 z-10 flex items-center justify-between border-b bg-background ">
            <Link href="/" className="text-muted-foreground hover:text-foreground" prefetch={true}>
              Home
            </Link>
            <div className="relative flex-1 max-w-md">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products"
                className="w-full rounded-lg bg-muted pl-8"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <ShoppingCartIcon className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Button>
              <Button variant="ghost" size="icon">
                <MailsIcon className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button variant="ghost" size="icon">
                <UserIcon className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </div>
          </header>
          <main className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out group hover:shadow-xl hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img
                src="/plant.png"
                alt="Product 1"
                width={500}
                height={400}
                className="object-contain w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">Classic Leather Shoes</h3>
                <p className="text-sm text-muted-foreground">Elegant and comfortable</p>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">$59.99</h4>
                  <Button variant="ghost" size="icon">
                    <HeartIcon className="h-5 w-5" />
                    <span className="sr-only">Favorite</span>
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function ArrowUpDownIcon(props) {
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
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}

function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ListOrderedIcon(props) {
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
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}

function MailsIcon(props) {
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
      <rect width="16" height="13" x="6" y="4" rx="2" />
      <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
      <path d="M2 8v11c0 1.1.9 2 2 2h14" />
    </svg>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
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

function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
