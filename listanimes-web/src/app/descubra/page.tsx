import Footer from "@/components/footer";
import Header from "@/components/header";
import { inter } from "@/styles/fonts";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <Header active="DESCUBRA"/>
      <main className="flex justify-center p-20">
        <div className="flex flex-col gap-10 bg-white p-16 w-300 rounded-xl justify-center items-center">
        <h1 className={`${inter.className} text-6xl font-bold text-stone-800`}>descubra!</h1>
          <p className={`${inter.className} text-xl font-bold text-stone-800`}>listas a serem implementadas...</p>
          <Link href="/listas" className="text-stone-50 bg-stone-800 w-40 p-2 text-center rounded-md"> Sua lista </Link>
        </div>

      </main>
      <Footer />
    </div>
  );
}
