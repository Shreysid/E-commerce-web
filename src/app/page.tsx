
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-b from-sky-800  to-sky-950 w-screen h-screen flex items-center">
        <h1
          className="text-8xl pl-80
      bg-gradient-to-r bg-slate-50 
      via-slate-300 to-sky-200 bg-clip-text 
      inline-block text-transparent"
        >
          Hello Moto
        </h1>
        <Link href="/box_example" className="pt-80 text-3xl">box_example</Link>
      </div>
    </main>
  );
}
