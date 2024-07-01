import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function page() {
  const savedProducts = [
    {
      id: 1,
      image: "/plant.png",
      title: "Cozy Fleece Pullover",
      price: 49.99,
    },
    {
      id: 2,
      image: "/plant.png",
      title: "Sleek Leather Backpack",
      price: 99.99,
    },
    {
      id: 3,
      image: "/plant.png",
      title: "Ergonomic Office Chair",
      price: 199.99,
    },
    {
      id: 4,
      image: "/plant.png",
      title: "Noise-Cancelling Headphones",
      price: 129.99,
    },
  ];
  return (
    <>
      <Navbar />
      <section className="container px-4 md:px-6 py-12">
        <div className="grid gap-6 md:gap-8">
          <div className="grid gap-2">
            <h1 className="text-2xl font-bold tracking-tight">Saved for Later</h1>
            <p className="text-muted-foreground">
              These products are saved for you to review and purchase later.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {savedProducts.map((product) => (
              <li key={product.id} className="border rounded-lg overflow-hidden group">
                <div className="relative">
                  <Image
                    src="/plant.png"
                    alt={product.title}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-background/80 hover:bg-background">
                      <ShoppingCartIcon className="h-5 w-5" />
                      <span className="sr-only">Move to cart</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-background/80 hover:bg-background">
                      <XIcon className="h-5 w-5" />
                      <span className="sr-only">Remove from saved</span>
                    </Button>
                  </div>
                </div>
                <div className="p-4 bg-background">
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-lg font-semibold">${product.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
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

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
