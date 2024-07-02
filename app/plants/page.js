"use client";
import { useEffect, useState } from "react";
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
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { ArrowUpDownIcon } from "@/lib/icons";

const montserrat = Montserrat_Alternates({ subsets: ["latin"], weight: ["700"] });

export default function Component() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlants() {
      try {
        const response = await fetch("http://localhost:3000/api/plant", { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Failed to fetch plants");
        }
        const data = await response.json();
        setPlants(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPlants();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={montserrat.className}>
      <div>
        <div className="position:absolute">
          <Navbar />
        </div>
        <div className="flex">
          <div className="hidden w-64 flex-col border-r bg-background p-4 md:flex">
            <div className="mb-6 flex items-center"></div>
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-medium">Filter</h3>
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
            <main className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-6">
              {plants.map((plant) => (
                <ProductCard
                  key={plant._id}
                  title={plant.title}
                  description={plant.description}
                  price={plant.price}
                />
              ))}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
