"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return (<>
    <p>Product Name : living water</p>
    <p>Price : 0 won</p>
    <p>Description : Giving Eterneal life and everyone who drinks it never thirst again</p>
    <button onClick={() => router.push("/payments")}>새로운 페이지로 이동</button></>);

}