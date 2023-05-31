import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-gradient-to-b from-sky-800  to-sky-950 w-screen h-screen flex items-center">
      <h1 className="text-3xl pl-80">Hello</h1>
      <Link href="/Components">3js</Link>
    </main>
  );
}
