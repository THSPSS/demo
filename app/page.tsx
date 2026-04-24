"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return (<>
    <ul>
      <li><span>아이템 명 :</span><p>living water</p></li>
      <li><span>가격 :</span><p>0 won</p></li>
    </ul>
    <button onClick={() => router.push("/payments")}>새로운 페이지로 이동</button></>);
}