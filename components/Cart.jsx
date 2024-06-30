/**
 * v0 by Vercel.
 * @see https://v0.dev/t/P5ufCYbSHIP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [cart, setCart] = useState([
    {
      id: 1,
      image: "/rutugandh.svg",
      title: "Cozy Blanket",
      price: 29.99,
      quantity: 2,
    },
    {
      id: 2,
      image: "/rutugandh.svg",
      title: "Autumn Mug",
      price: 12.99,
      quantity: 1,
    },
    {
      id: 3,
      image: "/rutugandh.svg",
      title: "Fall Fragrance Candle",
      price: 16.99,
      quantity: 3,
    },
  ]);
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const updateQuantity = (id, quantity) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
      <div className="grid gap-8">
        {cart.map((item) => (
          <div key={item.id} className="grid grid-cols-[100px_1fr_100px] items-center gap-4">
            <img
              src="/rutugandh.svg"
              alt={item.title}
              width={100}
              height={100}
              className="rounded-lg object-cover"
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity === 1}>
                <MinusIcon className="h-4 w-4" />
              </Button>
              <span>{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                <PlusIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => removeFromCart(item.id)}>
                <XIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-between">
        <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
        <Button size="lg">Checkout</Button>
      </div>
    </div>
  );
}

function MinusIcon(props) {
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
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
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
